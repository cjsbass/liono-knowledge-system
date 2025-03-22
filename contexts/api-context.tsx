"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { usersApi, workspacesApi, filesApi, ocrApi, mediaApi, chunksApi, proxyApi } from "@/lib/api";

interface ApiContextType {
  // API services
  usersApi: typeof usersApi;
  workspacesApi: typeof workspacesApi;
  filesApi: typeof filesApi;
  ocrApi: typeof ocrApi;
  mediaApi: typeof mediaApi;
  chunksApi: typeof chunksApi;
  proxyApi: typeof proxyApi;
  
  // User info
  currentUserData: any | null;
  isLoadingUser: boolean;
  userError: Error | null;
  
  // Workspace info
  workspacesList: any[] | null;
  isLoadingWorkspaces: boolean;
  workspacesError: Error | null;
  
  // Current workspace
  currentWorkspace: any | null;
  setCurrentWorkspace: (workspace: any) => void;
  
  // Refresh functions
  refreshUser: () => Promise<void>;
  refreshWorkspaces: () => Promise<void>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const { userId, isSignedIn, getToken } = useAuth();
  
  const [currentUserData, setCurrentUserData] = useState<any | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
  const [userError, setUserError] = useState<Error | null>(null);
  
  const [workspacesList, setWorkspacesList] = useState<any[] | null>(null);
  const [isLoadingWorkspaces, setIsLoadingWorkspaces] = useState<boolean>(false);
  const [workspacesError, setWorkspacesError] = useState<Error | null>(null);
  
  const [currentWorkspace, setCurrentWorkspace] = useState<any | null>(null);
  
  // Fetch user data
  const refreshUser = async () => {
    if (!userId || !isSignedIn) return;
    
    setIsLoadingUser(true);
    setUserError(null);
    
    try {
      const userData = await usersApi.getUser(userId);
      setCurrentUserData(userData);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setUserError(error);
      console.error("Failed to fetch user data:", error);
    } finally {
      setIsLoadingUser(false);
    }
  };
  
  // Fetch workspaces
  const refreshWorkspaces = async () => {
    if (!isSignedIn) return;
    
    setIsLoadingWorkspaces(true);
    setWorkspacesError(null);
    
    try {
      const workspacesData = await workspacesApi.listWorkspaces();
      setWorkspacesList(workspacesData);
      
      // Set default workspace if not already set
      if (!currentWorkspace && workspacesData?.length > 0) {
        setCurrentWorkspace(workspacesData[0]);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setWorkspacesError(error);
      console.error("Failed to fetch workspaces:", error);
    } finally {
      setIsLoadingWorkspaces(false);
    }
  };
  
  // Set up auth token interceptor for API calls
  useEffect(() => {
    if (!isSignedIn) return;
    
    // Intercept fetch calls to add auth token (simple version)
    const originalFetch = window.fetch;
    window.fetch = async function(input, init) {
      if (input.toString().includes(process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.liono.app')) {
        const token = await getToken();
        init = init || {};
        init.headers = init.headers || {};
        
        init.headers = {
          ...init.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      
      return originalFetch(input, init);
    };
    
    // Cleanup
    return () => {
      window.fetch = originalFetch;
    };
  }, [isSignedIn, getToken]);
  
  // Load initial data
  useEffect(() => {
    if (isSignedIn) {
      refreshUser();
      refreshWorkspaces();
    }
  }, [isSignedIn, userId]);
  
  const value: ApiContextType = {
    // API services
    usersApi,
    workspacesApi,
    filesApi,
    ocrApi,
    mediaApi,
    chunksApi,
    proxyApi,
    
    // User info
    currentUserData,
    isLoadingUser,
    userError,
    
    // Workspace info
    workspacesList,
    isLoadingWorkspaces,
    workspacesError,
    
    // Current workspace
    currentWorkspace,
    setCurrentWorkspace,
    
    // Refresh functions
    refreshUser,
    refreshWorkspaces,
  };
  
  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
} 
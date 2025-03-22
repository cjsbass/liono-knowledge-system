// API endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.liono.app';

// Helper function for API requests
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || `API error: ${response.status}`);
  }

  return response.json();
}

// Users API
export const usersApi = {
  getUser: (userId: string) => apiRequest(`/ask-frank-users/${userId}`),
  listUsers: (params?: { workspaceId?: string }) => 
    apiRequest(`/ask-frank-users${params?.workspaceId ? `?workspaceId=${params.workspaceId}` : ''}`),
  createUser: (userData: any) => apiRequest(`/ask-frank-users`, {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  updateUser: (userId: string, userData: any) => apiRequest(`/ask-frank-users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),
};

// Workspaces API
export const workspacesApi = {
  getWorkspace: (workspaceId: string) => apiRequest(`/ask-frank-workspaces/${workspaceId}`),
  listWorkspaces: () => apiRequest(`/ask-frank-workspaces`),
  createWorkspace: (workspaceData: any) => apiRequest(`/ask-frank-workspaces`, {
    method: 'POST',
    body: JSON.stringify(workspaceData),
  }),
};

// Files API
export const filesApi = {
  getFile: (fileId: string) => apiRequest(`/ask-frank-files/${fileId}`),
  listFiles: (params?: { workspaceId?: string }) => 
    apiRequest(`/ask-frank-files${params?.workspaceId ? `?workspaceId=${params.workspaceId}` : ''}`),
  uploadFile: (formData: FormData) => apiRequest(`/ask-frank-files`, {
    method: 'POST',
    headers: {}, // Let the browser set the appropriate Content-Type with boundary
    body: formData,
  }),
  deleteFile: (fileId: string) => apiRequest(`/ask-frank-files/${fileId}`, {
    method: 'DELETE',
  }),
};

// OCR API
export const ocrApi = {
  processDocument: (fileId: string) => apiRequest(`/ask-frank-ocr/${fileId}`, {
    method: 'POST',
  }),
  getOcrResults: (fileId: string) => apiRequest(`/ask-frank-ocr/${fileId}`),
};

// Media API
export const mediaApi = {
  getMedia: (mediaId: string) => apiRequest(`/ask-api-media/${mediaId}`),
  uploadMedia: (formData: FormData) => apiRequest(`/ask-api-media`, {
    method: 'POST',
    headers: {}, // Let the browser set the appropriate Content-Type with boundary
    body: formData,
  }),
};

// Chunks API (for document segments/chunks)
export const chunksApi = {
  getChunks: (documentId: string) => apiRequest(`/ask-api-chunks?documentId=${documentId}`),
  searchChunks: (query: string) => apiRequest(`/ask-api-chunks/search?q=${encodeURIComponent(query)}`),
};

// General proxy API for custom endpoints
export const proxyApi = {
  callEndpoint: (endpoint: string, options: RequestInit = {}) => 
    apiRequest(`/ask-api-proxy${endpoint}`, options),
}; 
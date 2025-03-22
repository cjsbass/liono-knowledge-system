"use client";

import { useState, useEffect, useCallback } from "react";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  initialData?: T;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | undefined>(options.initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await apiCall();
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      options.onError?.(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [apiCall, options]);

  return {
    data,
    isLoading,
    error,
    fetchData,
    setData,
  };
}

export function useLazyApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  return useApi<T>(apiCall, options);
}

export function useAutoApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions<T> = {},
  dependencies: any[] = []
) {
  const { fetchData, ...rest } = useApi<T>(apiCall, options);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    fetchData,
    ...rest,
  };
} 
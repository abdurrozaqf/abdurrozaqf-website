"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

export function ReactQueryProvider({ children }: Props) {
  const queryClient = new QueryClient({
    // queryCache: new QueryCache({
    //   onError: (error: unknown) => {
    //     const axiosError = error as AxiosError;
    //     if (axiosError?.response?.status === 401) {
    //       console.log("Session expired");
    //       router.push("/login");
    //     }
    //   },
    // }),
    // mutationCache: new MutationCache({
    //   onError: (error: unknown) => {
    //     const axiosError = error as AxiosError;
    //     if (axiosError?.response?.status === 401) {
    //       console.log("Session expired");
    //       router.push("/login");
    //     }
    //   },
    // }),
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

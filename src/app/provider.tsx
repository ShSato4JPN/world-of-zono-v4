"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import MainError from "@/components/errors/main";
import { queryConfig } from "@/libs/react-query";

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <ErrorBoundary fallback={<MainError />}>
      <QueryClientProvider client={queryClient}>
        {process.env.DEV && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

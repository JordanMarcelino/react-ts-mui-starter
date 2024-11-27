import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { MainErrorFallback } from '@/components/errors/main';
import { Spinner } from '@/components/ui/spinner';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from '@/store';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <CookiesProvider>
        <Provider store={store}>
          <ErrorBoundary FallbackComponent={MainErrorFallback}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                  {import.meta.env.DEV && <ReactQueryDevtools />}
                  {children}
                </ThemeProvider>
              </QueryClientProvider>
            </HelmetProvider>
          </ErrorBoundary>
        </Provider>
      </CookiesProvider>
    </React.Suspense>
  );
};

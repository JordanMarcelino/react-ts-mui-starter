import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

import { MainErrorFallback } from '@/components/errors/main';
import { Spinner } from '@/components/ui/spinner';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from '@/store';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import { ToastProvider } from '@/providers/toast';
import { LocalizationProvider } from '@mui/x-date-pickers';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10 * 1000,
          },
        },
      }),
  );

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
                  <ToastProvider>
                    {import.meta.env.DEV && <ReactQueryDevtools />}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      {children}
                    </LocalizationProvider>
                  </ToastProvider>
                </ThemeProvider>
              </QueryClientProvider>
            </HelmetProvider>
          </ErrorBoundary>
        </Provider>
      </CookiesProvider>
    </React.Suspense>
  );
};

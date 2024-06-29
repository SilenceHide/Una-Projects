import Layout from "@/components/layouts/Layout";
import "@/styles/icons.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            retry: 0,
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            hideProgressBar={false}
            closeOnClick={true}
            draggable={false}
            theme="light"
            position="top-right"
          />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}

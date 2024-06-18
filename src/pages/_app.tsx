import Layout from "@/components/layouts/Layout";
import "@/styles/icons.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          // autoClose={true}
          hideProgressBar={false}
          closeOnClick={true}
          draggable={false}
          theme="light"
          position="top-right"
        />
      </Layout>
    </QueryClientProvider>
  );
}

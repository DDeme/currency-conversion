// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import {
  QueryClientProvider,
  QueryClient,
  DehydratedState,
  Hydrate,
} from "@tanstack/react-query";
import { AppProps } from "next/app";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

type ReactQueryProps = {
  pageProps: {
    dehydratedState: DehydratedState;
  };
};
function MyApp({ Component, pageProps }: AppProps & ReactQueryProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;

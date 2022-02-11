import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import ApClient from '@shared/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ApClient} >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp

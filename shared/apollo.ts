import { ApolloClient, InMemoryCache } from '@apollo/client';

const ApClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SPACEX_ENDPOINT,
  cache: new InMemoryCache(),
});

export default ApClient
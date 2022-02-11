import { ApolloClient, InMemoryCache } from '@apollo/client';

const ApClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  // uri: process.env.SPACEX_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default ApClient
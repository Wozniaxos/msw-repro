import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: `http://localhost:3000/graphql`,
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

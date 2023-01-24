import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  watchlist?: Maybe<Array<WatchlistResponse>>;
};

export type WatchlistResponse = {
  __typename?: 'WatchlistResponse';
  id: Scalars['ID'];
  securityId: Scalars['String'];
  symbol: Scalars['String'];
  venueAccount: Scalars['String'];
};

export type WatchlistQueryVariables = Exact<{ [key: string]: never }>;

export type WatchlistQuery = {
  __typename?: 'Query';
  watchlist?: Array<{
    __typename?: 'WatchlistResponse';
    id: string;
    venueAccount: string;
    securityId: string;
    symbol: string;
  }> | null;
};

export const WatchlistDocument = gql`
  query Watchlist {
    watchlist {
      id
      venueAccount
      securityId
      symbol
    }
  }
`;

/**
 * __useWatchlistQuery__
 *
 * To run a query within a React component, call `useWatchlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchlistQuery({
 *   variables: {
 *   },
 * });
 */
export function useWatchlistQuery(
  baseOptions?: Apollo.QueryHookOptions<WatchlistQuery, WatchlistQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WatchlistQuery, WatchlistQueryVariables>(
    WatchlistDocument,
    options
  );
}
export function useWatchlistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WatchlistQuery,
    WatchlistQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WatchlistQuery, WatchlistQueryVariables>(
    WatchlistDocument,
    options
  );
}
export type WatchlistQueryHookResult = ReturnType<typeof useWatchlistQuery>;
export type WatchlistLazyQueryHookResult = ReturnType<
  typeof useWatchlistLazyQuery
>;
export type WatchlistQueryResult = Apollo.QueryResult<
  WatchlistQuery,
  WatchlistQueryVariables
>;
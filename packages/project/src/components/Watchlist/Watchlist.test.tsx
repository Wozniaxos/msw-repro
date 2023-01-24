import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Watchlist from './Watchlist';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@project/App';

describe('Watchlist', () => {
  it('renders properly', async () => {
    render(
      <ApolloProvider client={apolloClient}>
        <Watchlist />
      </ApolloProvider>
    );

    await waitFor(() =>
      expect(screen.getByText('Rendered')).toBeDefined(), { timeout: 10000 }
    );
  });
});

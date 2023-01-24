// src/mocks/server.js
import { setupServer } from 'msw/node';
import { graphQLHandlers } from './graphQLHandlers';
import { restHandlers } from './restHandlers';
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...graphQLHandlers);

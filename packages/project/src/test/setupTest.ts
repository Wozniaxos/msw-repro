import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, afterAll } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './mocks/server';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
HTMLCanvasElement.prototype.getContext = () => ({} as any);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  });
  server.printHandlers();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

expect.extend(matchers);

import '@testing-library/jest-dom';
import { server } from './mocks/server';

// Start the server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test (so overrides don't bleed between tests)
afterEach(() => server.resetHandlers());

// Close server after all tests
afterAll(() => server.close());

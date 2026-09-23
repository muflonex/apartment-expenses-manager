import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders Apartment Expenses heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Apartment Expenses/i);
  expect(headingElement).toBeTruthy();
});
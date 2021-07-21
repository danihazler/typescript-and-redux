import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deposit button', () => {
  render(<App />);
  const depositButton = screen.getByText(/Deposit/i);
  expect(depositButton).toBeInTheDocument();
});

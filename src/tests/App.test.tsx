import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Home Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});

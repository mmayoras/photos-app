import { render, screen } from '@testing-library/react';

import App from './App';
import { HEADER_TEXT } from './constants/appConstants';

test('renders page header text', () => {
  render(<App />);
  const headerElement = screen.getByText(HEADER_TEXT);
  expect(headerElement).toBeInTheDocument();
});

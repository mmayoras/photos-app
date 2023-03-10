import { render, screen } from '@testing-library/react';

import App from './App';
import { headerText } from './constants/appConstants';

test('renders page header text', () => {
  render(<App />);
  const headerElement = screen.getByText(headerText);
  expect(headerElement).toBeInTheDocument();
});

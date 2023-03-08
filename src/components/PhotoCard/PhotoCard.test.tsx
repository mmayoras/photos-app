import { render, screen } from '@testing-library/react';

import PhotoCard from './PhotoCard';

test('renders photo card with text', () => {
  render(<PhotoCard />);
  const textElement = screen.getByText('Image here');
  expect(textElement).toBeInTheDocument();
});

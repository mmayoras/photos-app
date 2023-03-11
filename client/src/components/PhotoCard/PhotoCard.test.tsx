import { render, screen } from '@testing-library/react';

import PhotoCard from './PhotoCard';
import { emptyPhoto } from '../../types/Photo';

test('renders photo card with text', () => {
  render(<PhotoCard photoData={emptyPhoto} />);
  const textElement = screen.getByText('Image here');
  expect(textElement).toBeInTheDocument();
});

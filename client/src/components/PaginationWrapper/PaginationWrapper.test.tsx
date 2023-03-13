import { render, screen } from '@testing-library/react';

import PaginationWrapper from './PaginationWrapper';

test('renders pagination text', () => {
  render(<PaginationWrapper totalCount={1} currentPage={1} onPageChange={jest.fn()} />);
  const textElement = screen.getByText('of 1');
  expect(textElement).toBeInTheDocument();
});

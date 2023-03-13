import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import CuratedPhotosListPage from './CuratedPhotosListPage';
import { HEADER_TEXT } from '../../constants/appConstants';

const queryClient = new QueryClient();

test('renders photo card with text', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <CuratedPhotosListPage />
    </QueryClientProvider>,
  );

  const textElement = screen.getByText(HEADER_TEXT);
  expect(textElement).toBeInTheDocument();
});

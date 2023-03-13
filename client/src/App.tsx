import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from 'react-query';

import CuratedPhotosListPage from './pages/CuratedPhotosListPage/CuratedPhotosListPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  min-height: 100vh;
  background-color: #fafafa;
`;

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <CuratedPhotosListPage />
      </AppContainer>
    </QueryClientProvider>
  );
};

export default App;

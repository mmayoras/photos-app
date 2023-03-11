import { useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import Header from './components/Header/Header';
import PhotoCard from './components/PhotoCard/PhotoCard';
import { usePageLocalStorage } from './hooks/usePageLocalStorage';
import { useSearchQueryLocalStorage } from './hooks/useSearchQueryLocalStorage';
import { Photo } from './types/Photo';
import { ApiRequest } from './utils/api';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  min-height: 100vh;
  background-color: #fafafa;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const getCuratedPhotos = () => {
  return ApiRequest({ path: 'photos/curated', method: 'get' });
}

const App: React.FC = () => {
  const { data, isLoading } = useQuery({ queryKey: ['curatedphotos'], queryFn: getCuratedPhotos });
  const [page, setPage] = usePageLocalStorage('page', 1);
  const [searchQuery, setSearchQuery] = useSearchQueryLocalStorage('search', '');

  return (
    <AppContainer>
      <Header inputValue={searchQuery} setInputValue={setSearchQuery} />
      <GalleryContainer>
        {(!!data && !!data.data && !!data.data.photos && data.data.photos.length > 0) && data.data.photos.map((photo: Photo, photoIdx: number) => (
          <PhotoCard key={photoIdx} photoData={photo} />
        ))}
      </GalleryContainer>
    </AppContainer>
  );
};

export default App;

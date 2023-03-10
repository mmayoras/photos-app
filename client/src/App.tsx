import { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header/Header';
import PhotoCard from './components/PhotoCard/PhotoCard';
import { usePageLocalStorage } from './hooks/usePageLocalStorage';
import { useSearchQueryLocalStorage } from './hooks/useSearchQueryLocalStorage';
import { Photo, emptyPhoto } from './types/Photo';

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

const App: React.FC = () => {
  const [photoList, setPhotoList] = useState<Photo[]>([emptyPhoto, emptyPhoto, emptyPhoto]);
  const [page, setPage] = usePageLocalStorage('page', 1);
  const [searchQuery, setSearchQuery] = useSearchQueryLocalStorage('search', '');

  console.log(searchQuery);

  return (
    <AppContainer>
      <Header inputValue={searchQuery} setInputValue={setSearchQuery} />
      <GalleryContainer>
        {photoList.map((_, itemIdx) => (
          <PhotoCard key={itemIdx} />
        ))}
      </GalleryContainer>
    </AppContainer>
  );
};

export default App;

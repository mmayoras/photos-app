import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';

import Header from '../../components/Header/Header';
import PaginationWrapper from '../../components/PaginationWrapper/PaginationWrapper';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { usePageLocalStorage } from '../../hooks/usePageLocalStorage';
import { useSearchQueryLocalStorage } from '../../hooks/useSearchQueryLocalStorage';
import { ApiRequest } from '../../utils/api';
import { Photo } from '../../../../types/Photo';

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CuratedPhotosListPage: React.FC = () => {
  const [totalPhotoCount, setTotalPhotoCount] = useState<number>(0);
  const [photosList, setPhotosList] = useState<Photo[]>([]);
  const [page, setPage] = usePageLocalStorage('page', 1);
  const [searchQuery, setSearchQuery] = useSearchQueryLocalStorage('search', '');

  const { data, isLoading } = useQuery(['curatedphotos', page], () =>
    ApiRequest({ path: `photos/curated?page=${page}`, method: 'get' }),
  );

  useEffect(() => {
    if (!isLoading && !!data) {
      const { data: photoData } = data;

      setPhotosList(photoData.photos || []);
      setTotalPhotoCount(photoData.total_results);
    }
  }, [data, isLoading]);

  return (
    <>
      <Header inputValue={searchQuery} setInputValue={setSearchQuery} />
      <PaginationWrapper currentPage={page} totalCount={totalPhotoCount} onPageChange={setPage}>
        <GalleryContainer>
          {photosList.length > 0 &&
            photosList.map((photo: Photo, photoIdx: number) => (
              <PhotoCard key={photoIdx} photoData={photo} />
            ))}
        </GalleryContainer>
      </PaginationWrapper>
    </>
  );
};

export default CuratedPhotosListPage;

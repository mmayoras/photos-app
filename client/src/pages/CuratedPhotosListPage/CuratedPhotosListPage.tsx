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
  const [totalSearchCount, setTotalSearchCount] = useState<number>(0);
  const [searchList, setSearchList] = useState<Photo[]>([]);
  const [curatedPage, setCuratedPage] = usePageLocalStorage('curatedPage', 1);
  const [searchPage, setSearchPage] = usePageLocalStorage('searchPage', 1);
  const [searchQuery, setSearchQuery] = useSearchQueryLocalStorage('search', '');
  const [isSearching, setIsSearching] = useState<boolean>(searchQuery.trim() !== '');

  const { data: curatedData, isLoading: isCuratedLoading } = useQuery({
    queryKey: ['curatedphotos', curatedPage],
    queryFn: () => ApiRequest({ path: `photos/curated?page=${curatedPage}`, method: 'get' }),
    keepPreviousData: true,
    enabled: !isSearching,
  });

  const { data: searchData, isLoading: isSearchLoading } = useQuery({
    queryKey: ['searchPhotos', searchPage, searchQuery],
    queryFn: () =>
      ApiRequest({ path: `photos/search?page=${searchPage}&query=${searchQuery}`, method: 'get' }),
    keepPreviousData: true,
    enabled: isSearching,
  });

  useEffect(() => {
    if (!isCuratedLoading && !!curatedData) {
      const { data: photoData } = curatedData;

      setPhotosList(photoData.photos || []);
      setTotalPhotoCount(photoData.total_results);
    }
  }, [curatedData, isCuratedLoading]);

  useEffect(() => {
    if (!isSearchLoading && !!searchData) {
      const { data: photoData } = searchData;

      setSearchList(photoData.photos || []);
      setTotalSearchCount(photoData.total_results);
    }
  }, [searchData, isSearchLoading]);

  const onChangeInput = (newInput: string) => {
    if (newInput.trim() === '') {
      setIsSearching(false);
    }

    if (isSearching && searchPage !== 1) {
      setSearchPage(1);
    }

    setSearchQuery(newInput);
  };

  const onSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      setCuratedPage(1);
      setIsSearching(true);
    }
  };

  const onSearchClear = () => {
    setSearchQuery('');
    setSearchPage(1);
    setIsSearching(false);
  };

  const currentPage = isSearching ? searchPage : curatedPage;
  const currentTotalCount = isSearching ? totalSearchCount : totalPhotoCount;
  const currentPageChange = isSearching ? setSearchPage : setCuratedPage;

  return (
    <>
      <Header
        inputValue={searchQuery}
        setInputValue={onChangeInput}
        submit={onSearchSubmit}
        clear={onSearchClear}
      />
      <PaginationWrapper
        currentPage={currentPage}
        totalCount={currentTotalCount}
        onPageChange={currentPageChange}
      >
        <GalleryContainer>
          {isSearching
            ? searchList.map((photo: Photo, photoIdx: number) => (
                <PhotoCard key={photoIdx} photoData={photo} />
              ))
            : photosList.map((photo: Photo, photoIdx: number) => (
                <PhotoCard key={photoIdx} photoData={photo} />
              ))}
        </GalleryContainer>
      </PaginationWrapper>
    </>
  );
};

export default CuratedPhotosListPage;

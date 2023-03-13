import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { COUNT_PHOTOS_PER_PAGE } from '../../constants/appConstants';

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const LeftArrow = styled.button<{ disabled: boolean }>`
  border: solid black;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 8px;
  margin-right: 48px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  cursor: pointer;

  opacity: ${(props) => props.disabled ? '0.2' : '1'};
`;

const RightArrow = styled.button<{ disabled: boolean }>`
  border: solid black;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  cursor: pointer;

  opacity: ${(props) => props.disabled ? '0.2' : '1'};
`;

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const PaginationWrapper: React.FC<PropsWithChildren<PaginationProps>> = ({
  totalCount,
  currentPage,
  onPageChange,
  children,
}) => {
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = Math.ceil(totalCount / COUNT_PHOTOS_PER_PAGE);
  const onFirstPage = currentPage === 1;
  const onLastPage = currentPage === lastPage;

  return (
    <PaginationContainer>
      Page {currentPage} of {lastPage}
      <ArrowContainer>
        <LeftArrow onClick={onPrevious} disabled={onFirstPage}  />
        <RightArrow onClick={onNext} disabled={onLastPage} />
      </ArrowContainer>
      {children}
    </PaginationContainer>
  );
};

export default PaginationWrapper;

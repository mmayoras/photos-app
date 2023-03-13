import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { COUNT_PHOTOS_PER_PAGE } from '../../constants/appConstants';

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageText = styled.p`
  font-size: 18px;
  margin: 0 16px 0;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

const LeftArrow = styled.button<{ disabled: boolean }>`
  background-color: #fafafa;
  border: solid black;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  cursor: pointer;

  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;

const RightArrow = styled.button<{ disabled: boolean }>`
  background-color: #fafafa;
  border: solid black;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  cursor: pointer;

  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
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

  const lastPage: number = Math.ceil(totalCount / COUNT_PHOTOS_PER_PAGE);
  const onFirstPage: boolean = currentPage === 1;
  const onLastPage: boolean = currentPage === lastPage;

  return (
    <PaginationContainer>
      <ArrowContainer>
        <LeftArrow onClick={onPrevious} disabled={onFirstPage} />
        <PageText>
          <b>{currentPage}</b> of {lastPage}
        </PageText>
        <RightArrow onClick={onNext} disabled={onLastPage} />
      </ArrowContainer>
      {children}
    </PaginationContainer>
  );
};

export default PaginationWrapper;

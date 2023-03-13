import styled from '@emotion/styled';

import { Photo } from '../../../../types/Photo';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin: 32px;
  padding: 16px;
  width: 225px;
  height: 225px;
  border: 1px solid #8884d8;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoHeader = styled.h3`
  font-size: 16px;
  margin: 0 5px 0 0;
`;

interface PhotoCardProps {
  photoData: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photoData }) => {
  const { alt, src, photographer, photographer_url } = photoData;

  return (
    <CardContainer>
      <img src={src.small} alt={alt} />
      <InfoContainer>
        <InfoHeader>Captured by: </InfoHeader>
        <label>{photographer}</label>
      </InfoContainer>
      <a href={photographer_url} target='_blank' rel='noopener noreferrer'>
        Profile
      </a>
    </CardContainer>
  );
};

export default PhotoCard;

import styled from '@emotion/styled';
import { Photo } from '../../types/Photo';

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

interface PhotoCardProps {
  photoData: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photoData }) => {
  const { alt, src } = photoData;

  return (
    <CardContainer>
      <img src={src.small} alt={alt} />
    </CardContainer>
  );
};

export default PhotoCard;

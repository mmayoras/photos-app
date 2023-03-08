import styled from '@emotion/styled';

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

const PhotoCard: React.FC = () => {
  return <CardContainer>Image here</CardContainer>;
};

export default PhotoCard;

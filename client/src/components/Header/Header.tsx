import styled from '@emotion/styled';

import { headerText, subHeaderText } from '../../constants/appConstants';

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 75px;
  padding: 32px;
  border-bottom: 1px solid black;
  flex-wrap: wrap;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  margin: 16px 0;
`;

const SubHeaderText = styled.p`
  margin: 0;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  inputValue: string;
  setInputValue: (newQueryValue: string) => void;
}

const Header: React.FC<HeaderProps> = ({ inputValue, setInputValue }) => {
  return (
    <AppHeader>
      <HeaderTextContainer>
        <HeaderText>{headerText}</HeaderText>
        <SubHeaderText>{subHeaderText}</SubHeaderText>
      </HeaderTextContainer>
      <SearchInputContainer>
        <label htmlFor='searchQuery'>Looking for something specific?</label>
        <input
          type='text'
          name='searchQuery'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </SearchInputContainer>
    </AppHeader>
  );
};

export default Header;

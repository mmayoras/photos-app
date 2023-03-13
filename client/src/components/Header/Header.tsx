import styled from '@emotion/styled';

import { HEADER_TEXT, SUBHEADER_TEXT } from '../../constants/appConstants';

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
  flex-direction: column;
  justify-content: center;
`;

const SearchTextInput = styled.input`
  padding: 8px;
  font-size: 16px;
  min-width: 275px;
`;

interface HeaderProps {
  inputValue: string;
  setInputValue: (newQueryValue: string) => void;
}

const Header: React.FC<HeaderProps> = ({ inputValue, setInputValue }) => {
  return (
    <AppHeader>
      <HeaderTextContainer>
        <HeaderText>{HEADER_TEXT}</HeaderText>
        <SubHeaderText>{SUBHEADER_TEXT}</SubHeaderText>
      </HeaderTextContainer>
      <SearchInputContainer>
        <SearchTextInput
          type='text'
          name='searchQuery'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder='Search for something specific...'
        />
      </SearchInputContainer>
    </AppHeader>
  );
};

export default Header;

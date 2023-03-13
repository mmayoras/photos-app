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
  margin: 16px 0 8px;
`;

const SubHeaderText = styled.p`
  margin: 0 0 16px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchTextInput = styled.input`
  padding: 8px;
  font-size: 16px;
  min-width: 175px;
  max-height: 36px;
  margin-right: 0;
  border: 1px solid black;
  border-right: none;
  outline: none;
`;

const SearchButton = styled.button`
  background-color: #8884d8;
  color: white;
  padding: 8px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  border-left: none;
`;

const ClearButton = styled.button`
  background-color: white;
  color: #8884d8;
  padding: 8px;
  margin-left: 8px;
  font-size: 16px;
  border: 1px solid #8884d8;
  border-radius: 20px;
  cursor: pointer;
  min-width: 36px;
`;

interface HeaderProps {
  inputValue: string;
  setInputValue: (newQueryValue: string) => void;
  submit: () => void;
  clear: () => void;
}

const Header: React.FC<HeaderProps> = ({ inputValue, setInputValue, submit, clear }) => {
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
          placeholder='Search...'
        />
        <SearchButton onClick={submit}>Search</SearchButton>
        <ClearButton onClick={clear}>X</ClearButton>
      </SearchInputContainer>
    </AppHeader>
  );
};

export default Header;

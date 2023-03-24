import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import SearchBar from '../../components/SearchBar/SearchBar';

const SnippetContainer = styled.div`
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
`;

const Snippet = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <SnippetContainer theme={theme}>
      <SearchBar />
    </SnippetContainer>
  )
}

export default Snippet
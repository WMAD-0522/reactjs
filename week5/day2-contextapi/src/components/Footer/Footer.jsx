import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    background-color: ${(props) => props.theme === "light" ? "#fff" : "#323443"};
    color: ${(props) => props.theme === "light" ? "#323443" : "#fff"};
    border-top: 1px solid #ddd;
    padding: 1rem 3rem;
    height: 220px;
`;
const Footer = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
        <ul>
            <li>
                <Link to={"#Docs"}>Docs</Link>
            </li>
            <li>
                <Link to={"#BookNotes"}>Book Notes</Link>
            </li>
            <li>
                <Link to={"#docs"}>Docs</Link>
            </li>
            <li>
                <Link to={"#docs"}>Docs</Link>
            </li>
        </ul>
    </Wrapper>
  )
}

export default Footer
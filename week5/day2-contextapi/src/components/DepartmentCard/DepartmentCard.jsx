import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WrapperCard = styled.div`
    background-color: ${props => props.theme === "light" ? "#323443" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#323443"};
    padding: 1rem 2rem;
    min-width: 262px;
    width: 262px;
    height: 190px;
    border-radius: 12px;
    position: relative;
    text-align: center;
    h2{
        margin-top: 3rem;
    }
`;

const CircleIcon = styled.div`
    background-color: ${props => props.theme === "light" ? "#323443" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#323443"};
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme === "light" ? "#fff" : "#323443"};
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`;


const DepartmentCard = ({title,  description, icon}) => {
    const { theme } = useContext(ThemeContext);
  return (
    <WrapperCard theme={theme}>
        <CircleIcon theme={theme}><FontAwesomeIcon size="1x" icon={icon} /></CircleIcon>
        <h2>{title}</h2>
        <p>{description}</p>
    </WrapperCard>
  )
}

export default DepartmentCard
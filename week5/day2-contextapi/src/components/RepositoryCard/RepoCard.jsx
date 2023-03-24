import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import starIcon from '../../assets/starIcon.png';
const Wrapper = styled.div`
    max-width: 556px;
    width: calc(556px - 2rem);
    height: 282px;
    background-color: ${(props) => props.theme === "light" ? "#323443" : "#fff"};
    color: ${(props) => props.theme === "light" ? "#fff" : "#323443"};
    border-radius: 20px;
    padding: 1.2rem 2rem;
    display: flex;
    flex-direction: column;
    p{
        display: flex;
        align-items: center;
    }
    div{
        margin-top: auto;
        display: flex;
        justify-content: space-between;
    }
`;

const RepoCard = ({ title, description, technologies, rating}) => {
    const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div>
            <p>{technologies.join(", ")}</p>
            <p><span><img src={starIcon} alt="rating" /></span>{rating} Stars</p>
        </div>
    </Wrapper>
  )
}

export default RepoCard
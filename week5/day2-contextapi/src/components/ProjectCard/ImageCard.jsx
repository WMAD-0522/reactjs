import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
const Wrapper = styled.div`
  width: 556px;
  height: 282px;
  background-color: ${(props) =>
    props.theme === "light" ? "#323443" : "#fff"};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#323443")};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 3rem;
  overflow: hidden;
  img{
    left: 0;
    right: 0;
    top: 100px;
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    img{
      width: 80%;
      margin: 12px auto 0 auto;
    }
    p{
      padding: 0 1rem;
    }
  }

`;

const SquareButton = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#3F4152" : "#ddd"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#fff" : "#3F4152"};
    color: ${(props) => (props.theme === "light" ? "#3F4152" : "#fff")};
  }
  
`;

const ImageCard = ({ isNew, technologies, image}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
      <SquareButton theme={theme}>
        <FontAwesomeIcon size="xl" icon={faSquareArrowUpRight} />
      </SquareButton>
      {isNew && <p>NEW</p>}
      <p>{technologies.join(",")}</p>
      <img src={image} alt="project" />
    </Wrapper>
  );
};

export default ImageCard;

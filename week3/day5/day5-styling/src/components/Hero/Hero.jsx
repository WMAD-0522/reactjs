import React from 'react'
import styled from "styled-components";

const Hero = () => {

  const Title = styled.h1`
    font-size: 1.5em;
    color: black;
    margin: 12px 0;
  `;

  const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : props.secondary ? "black" : "white"};
    color: ${props => props.primary ? "white" : props.secondary ? "white" : "palevioletred"};
    border:none;
    padding: 10px 20px;
    font-size:1em;
    outline: none;
    border-radius: 4px;
  `;

  const CustomParagraph = styled.p`
    color: black;
    margin: 12px 0;
  `;

  return (
    <div>
      <Title>Welcome to my page</Title>
      <CustomParagraph>Ut sint voluptate consectetur eiusmod magna sunt pariatur elit anim elit incididunt in. Commodo eu nisi officia velit minim occaecat mollit. Non reprehenderit nisi incididunt magna pariatur Lorem sunt adipisicing irure est. Excepteur nostrud officia commodo et anim.</CustomParagraph>
      <Button secondary>Discover</Button>
      <Button primary>Discover</Button>
    </div>
  )
}

export default Hero
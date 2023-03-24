import React from 'react'
import styled from 'styled-components'
import ImageCard from './ImageCard';
const Wrapper = styled.div`
    // use ProjectCardDesign.png as reference
    display: flex;
    margin: 3rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }

`;

const CardContext = styled.div`
    max-width: 556px;
    margin-left: 2rem;
    h2{
        font-size: 18px;
        font-weight: bold;
    }
    h1{
        font-size: 48px; 
        margin: 0;
    }
    p{
        font-size: 18px;
    }

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;


const ProjectCard = ({department, title, description, isNew, technologies, image}) => {
  return (
    <Wrapper>
        <ImageCard isNew={isNew} technologies={technologies} image={image} />
        <CardContext>
            <h2>{department}</h2>
            <h1>{title}</h1>
            <p>{description}</p>
        </CardContext>
    </Wrapper>
  )
}

export default ProjectCard
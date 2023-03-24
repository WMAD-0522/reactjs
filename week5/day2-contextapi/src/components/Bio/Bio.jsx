import React from 'react'
import styled from 'styled-components';

const BioCard = styled.div`
    max-width: 350px;
    h2{
        margin: 0 0 0.3rem 0;
    }
    p{
        margin: 0;
    }
`;

const Bio = ({ title, description }) => {
  return (
    <BioCard>
        <h2>{title}</h2>
        <p>{description}</p>
    </BioCard>
  )
}

export default Bio
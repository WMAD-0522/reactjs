import React, { useContext } from 'react'
import styled from 'styled-components'
import AvatarImage from "../../assets/avatar.svg"
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import ThemeContext from '../../context/ThemeContext';
import Bio from '../Bio/Bio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


const Wrapper = styled.div`
    display: flex;
    gap: 36px;
    align-items:center;
    margin: 3rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }
`;
const Avatar = styled.div`
    min-width: 155px;
    height: 155px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: ${props => props.theme === "light" ? "#323443" : "#fff"};
    img{
      width: 124px;
      height: 124px;  
    }
`;

const Connect = styled.div`
    div{
        display: flex;
        gap: 18px;
        i{
            font-size: 2rem;
        }
    }
`;

const AvatarCard = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
        <Avatar theme={theme}>
            <img src={AvatarImage} alt="avatar-image" />
        </Avatar>
        <Bio title={"Biography"} description={"Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile."} />
        <Connect >
            <h2>Lets connect</h2>
            <div>
                <FontAwesomeIcon size="2x" icon={faInstagram} />    
                <FontAwesomeIcon size="2x" icon={faFacebook} />              
                <FontAwesomeIcon size="2x" icon={faTwitter} />  
            </div>
        </Connect>
    </Wrapper>
  )
}

export default AvatarCard
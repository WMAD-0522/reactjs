import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'
import AvatarCard from '../../components/AvatarCard/AvatarCard';
import Bio from '../../components/Bio/Bio';
import DepartmentCard from '../../components/DepartmentCard/DepartmentCard';
import { faRunning, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import WebImage from "../../assets/web1.png";
import RepoCard from '../../components/RepositoryCard/RepoCard';
import Contact from '../../components/Contact/Contact';

const HomeContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 6rem;

    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }

`;

const SummaryTitle = styled.h1`
    max-width: 1082px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;

    letter-spacing: 1px;

    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 5.75%, #4CA9FF 95.52%);" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%);"}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 40px;
    }

`;

const RowWrapper = styled.div`
    display: flex;
    margin: 6rem  0;
    gap: 1rem;
    
    svg{
      margin: auto 12px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        align-items: center;
    }

`;

const TitleWrapper = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
`;

const RepoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const Home = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <HomeContainer theme={theme}>
        <SummaryTitle theme={theme}>Hi Im Joel, a special human with some ability to love learning and working on teamwork. </SummaryTitle>
        <AvatarCard />
        <RowWrapper>
          <Bio title="What I do" description="Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority." />
          <DepartmentCard icon={faRunning} title="Web Development" description="You will receive a customized plan for your fitness journey, and lots of support."/>
          <DepartmentCard icon={faRunning} title="Web Development" description="You will receive a customized plan for your fitness journey, and lots of support."/>
          <FontAwesomeIcon size="4x" icon={faArrowRight} />
        </RowWrapper>
        
        <TitleWrapper>Featured Project</TitleWrapper>
        
          <ProjectCard 
            isNew={true}
            technologies={["React", "NextJS", "Styled Components", "Framer Motion"]}
            image={WebImage}
            department={"Web Development"} 
            title={"Bolder Landingpage"} 
            description={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."} 
          />
          <ProjectCard 
            isNew={false}
            technologies={["React", "NextJS", "Styled Components", "Framer Motion"]}
            image={WebImage}
            department={"Web Development"} 
            title={"Kerja Mantul Education Management"} 
            description={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."} 
          />

          <TitleWrapper>Code Snippet</TitleWrapper>
          <RepoWrapper>
            <RepoCard 
              title={"Nextjs Starter"}
              description={"A dead simple for nextjs project."}
              technologies={["Styled Components", "Framer Motion"]}
              rating={8}
            />
            <RepoCard 
              title={"Nextjs Starter"}
              description={"A dead simple for nextjs project."}
              technologies={["Framer Motion"]}
              rating={8}
            />
            <RepoCard 
              title={"Nextjs Starter"}
              description={"A dead simple for nextjs project."}
              technologies={["NextJS"]}
              rating={8}
            />
            <RepoCard 
              title={"Nextjs Starter"}
              description={"A dead simple for nextjs project."}
              technologies={["NextJS", "Styled Components"]}
              rating={8}
            />
        </RepoWrapper>
    </HomeContainer>
  )
}

export default Home
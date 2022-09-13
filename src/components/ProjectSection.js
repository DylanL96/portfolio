import React from 'react';
//Import Components
import Projects from './Projects';
import Footer from './Footer';
//Import Images
import covid from '../images/covid.png';
import pokedex from '../images/pokedex.png';
import nba from '../images/nba.png';
import website from '../images/website.png';
import library from '../images/library.png';
import ecommerce from '../images/ecommerce.png';
import tesla from '../images/tesla.png';
//Styled Components
import styled from 'styled-components';

const ProjectSection = () => {
  return (
    <>
    <StyledProjects id="projects"> 
    <StyledTitle>Check out these projects I created.</StyledTitle>
    <ProjectsContainer>
      <ProjectsWrapper>
        <Test>
          <Projects
            src={covid}
            text='Tracking the global statistics of Covid-19'
            path='/project/covid'
          />
          <Projects
            src={tesla}
            text='Tesla website that fetches $TSLA financial data and displays Wall St analyst price targets 🎯'
            path='/project/tesla'
          />
          <Projects
            src={pokedex}
            text='A pokedex that fetches any pokemon data using an API'
            path='/project/pokemon'
          />
        </Test>
        <Test>
          <Projects
            src={nba}
            text='Search for NBA player statistics for the 2019-2020 sesaon!'
            path='/project/nba'
          />
          <Projects
            src={website}
            text='Blogging website with full login/logout authentication'
            path='/project/website'
          />
          <Projects
            src={ecommerce}
            text='E-Commerce shopping cart with Java'
            path='/project/ecommerce'
          />
          <Projects
            src={library}
            text='Simple library project'
            path='/project/library'
          />
        </Test>
      </ProjectsWrapper>
    </ProjectsContainer>
  </StyledProjects>
  <Footer/>
  </>
  )
};

const Test = styled.div`
  margin-bottom: 30px;
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

//Styled Components
const StyledProjects = styled.div`
  padding: 4rem;
  /* border: 1px solid white; */
  
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1500px;
  width: 90%;
  margin: 0 auto;
  

`;

const ProjectsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;


export default ProjectSection;
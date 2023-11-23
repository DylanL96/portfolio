import React from 'react';
import styled from 'styled-components';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const LandingSetion = () => {
  return (
    <>
    <Landing>
      <Description variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <div className="title">
          <h3>Welcome to my website.</h3>
        </div>
        <div className="paragraph">
          <p>I'm an aspiring Software Developer based in Toronto, CA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
        </div>
        <div className="buttons">
          <button><a className="resume" href="https://github.com/DylanL96/portfolio/blob/main/2021-Dylan-Law-Resume.pdf">Resume</a></button>
          <button className="contact"><a href="mailto:dlaw96@hotmail.com?subject=Mail From Portfolio Site">Contact</a></button>
        </div>
      </Description>
    </Landing>
    {/* <a href="#about"><i class="fas fa-long-arrow-alt-down fa-lg"></i></a> */}
    </>
  )
};

//Styled Components
const Landing = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  /* border: 1px solid white; */
  justify-content: space-between;
  padding: 0rem 0rem 0rem 10rem;
`;

const Description = styled(motion.div)`
  /* border: 1px solid white; */
  padding: 0rem 12rem 10rem 10rem;
  width: 150vh;
  .buttons{
    color: orange;
    display: flex;
    justify-content: space-between;
    width: 17rem;
  }
  h2{
    color: #8892b0;
    position: relative;
    bottom: 30px;
  }
  h4{
    color: #00FFFF;
    position: relative;
    top: 15px;
  }
  p{
    position: relative;
    bottom: 30px;
  }
  a{
    text-decoration: none;
    color: #00FFFF;
  }
  @media(max-width: 1300px){
    /* border: 1px solid white; */
    position: relative;
    right: 12rem;
    h3{
      font-size: 4vh;
    }
    .title{
      text-align: center;
    }
    .paragraph{
      text-align: center;
    }
  }
`;

export default LandingSetion;
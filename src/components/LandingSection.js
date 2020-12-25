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
          <h3>Dylan Law is a scientist by qualification, but a web developer by choice.</h3>
        </div>
        <p>I'm an aspiring Web Developer based in Toronto, CA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
        <button><a className="resume" href="https://github.com/DylanL96/portfolio/raw/main/2021-Dylan-Law-Resume.pdf">Resume</a></button>
        <button className="contact"><a href="mailto:dlaw96@hotmail.com?subject=Mail From Portfolio Site">Contact</a></button>
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
  .contact{
    margin-left: 20px;
  }
  .fa-long-arrow-alt-down{
    color: #ccd6f6;
    &:hover{
      color: orange;
      cursor: pointer;
    }
  }
  @media(max-width: 1300px){
    h3{
      font-size: 5vh;
    }
    .contact{
      margin-left: 10px;
    }
    .title{
      position: relative;
      right: 20vh;
    }
    p{
      position: relative;
      right: 20vh;
    }
    button{
      position: relative;
      right: 20vh;
    }
  }
`;

export default LandingSetion;
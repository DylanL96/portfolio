import React from 'react';
import styled from 'styled-components';
import selfie from '../images/selfie.jpg';

const AboutSection = () => {
  return (
    <About id="about">
      <Description>
        <div className="title">
            <h3><span></span> About Me</h3>
            <StyledLine className="line"></StyledLine>
        </div>
        <div className="paragraphs">
          <div>
            <p>Hello! I'm Dylan, an aspiring Developer based in Toronto Canada.</p>
          </div>
          <div>
            <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
          </div>
          <div>
            <p>
            Shortly after graduating from McMaster University, I joined various Environmental Engineering firms as a Professional Scientist, but I always felt that my passion was more towards building web applications. I have been trying to learn as much as I can in this extraordinary field.
            </p>
          </div>
          <div>
            <p>
            Here are a few technologies I've been working with recently:
            </p>
          </div>
        </div>
        <StyledNav>
          <ul>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>JavaScript</p>
            </li>
          </ul>
        </StyledNav>
        <StyledNav1>
          <ul id="test">
            <li>
              <p>ReactJS</p>
            </li>
            <li>
              <p>NodeJS</p>
            </li>
            <li>
              <p>Styled Components</p>
            </li>
          </ul>
        </StyledNav1>
      </Description>
      <StyledImage>
        <img src={selfie} alt="" />
      </StyledImage>
    </About>
  )
};

const StyledImage = styled.div`
/* border: 1px solid white; */
  img{
    height: 50vh;
    object-fit: cover;
    /* border: 1px solid white; */
  }
  @media(max-width: 1300px){
    img{
      margin-left: 4rem;
    }
  }
`; 

const About = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* border: 1px solid white; */
  /* justify-content: space-between; */
  justify-content: space-around;
  @media(max-width: 1300px){
    display: block;
    .paragraphs{
      font-weight: bold;
      width: 35vh;
      position: relative;
      right: 2rem;
    }
    .title{
      position: relative;
      right: 2rem;
    }
  }
`;

const Description = styled.div`
  /* border: 1px solid white; */
  padding-left: 8rem;
  width: 100vh;
  /* height: 90vh; */
  h3{
    font-size: 4vh;
    font-weight: bold;
  }
  p{
    padding: 25px 0px 0px 0px;
  }
  span{
    color: #00FFFF;
  }
`;

const StyledLine = styled.div`
  border-bottom: 1px solid white;
  width: 50vh;
  @media(max-width: 1300px){
    width: 30vh;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0rem 0rem 0.8rem 2rem;
  @media(max-width: 1300px){
    p{
      font-size: 0.7rem;
    }
  }
  ul{
    font-size: 1rem;
  }
  li{
    padding-right: 2rem;
    color: #00FFFF;
  }
`;

const StyledNav1 = styled.nav`
  @media(max-width: 1300px){
    p{
      font-size: 0.7rem;
    }
    ul{
      margin-top: 1.2rem;
    }
  }
  ul{
    /* display: flex; */
    font-size: 1rem;
    position: relative;
    left: 12rem;
    bottom: 9.9rem;
  }
  li{
    /* padding-right: 12rem; */
    color: #00FFFF;
  }
`;

export default AboutSection;
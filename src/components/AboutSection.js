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
        <div className="lists">
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
        </div>
      </Description>
      <StyledImage>
        <img src={selfie} alt="" />
      </StyledImage>
    </About>
  )
};

const StyledImage = styled.div`
  img{
    height: 50vh;
    /* border: 1px solid white; */
  }
  @media(max-width: 1300px){
      display: flex;
      justify-content: center;
      img{
        width: 70%;
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
  width: 90vh;
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
  .lists{
    /* border: 1px solid white; */
    width: 23rem;
  }
  li{
    color: #00FFFF;
  }
  @media(max-width: 1300px){
    .lists{
      position: relative;
      right: 40px;
    }
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

`;

const StyledNav1 = styled.nav`
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
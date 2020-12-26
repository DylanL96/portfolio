import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
    <StyledNav>
      <ul>
        <li>
          <a href="/"><span></span> Home</a>
        </li>
        <li>
          <a href="#about"><span></span> About</a>
        </li>
        <li>
          <a href="#projects"><span></span> Projects </a>
        </li>
      </ul>
    </StyledNav>
    <LeftNav>
      <ul>
        <li>
          <a href="https://www.instagram.com/mr.dylan96"><i className="fab fa-instagram fa-2x"></i></a>
        </li>
        <li>
          <a href="https://github.com/DylanL96"><i className="fab fa-github-square fa-2x"></i></a>
        </li>
        <li>
          <a href="https://twitter.com/Dylan_L96"><i className="fab fa-twitter fa-2x"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dylan-law-4b0307127/"><i className="fab fa-linkedin-in fa-2x"></i></a>
        </li>
      </ul>
    </LeftNav>
    </>
  )
};

const StyledNav = styled.nav`
  @media(max-width: 1300px){
    display: flex;
    justify-content: center;
  }
  align-items: right;
  min-height: 10vh;
  padding: 2rem 2rem 0rem 0rem;
  a{
    text-decoration: none;
  }
  a:hover{
    color: #00FFFF;
  }
  ul{
    display: flex;
    list-style: none;
    font-size: 1rem;
    justify-content: flex-end;
  }
  li{
    padding-left: 3rem;
  }
  span{
    color: #00FFFF;
    
  }
  .resume{
    border: 1px solid #00FFFF;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 10px;
    color: #00FFFF;
    &:hover{
      opacity: 0.8;
    }
  }
  
`;

const LeftNav = styled.nav`
  /* border: 1px solid white; */
  display: flex;
  /* justify-content: center; */
  z-index: 10;
  position: fixed;
  top: 75vh;
  /* height: 100vh;
  width: 100vh; */
  left: 0;
  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: -30px 0px 20px 20px;
  }
  li +li{
    margin-top: 20px;
  }
`;

export default Navbar;
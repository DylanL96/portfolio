import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Projects = (props) => {
  // console.log(props)
  return (
    <>
      <ProjectItem>
        <StyledLink to={props.path}>
          <ProjectItemPicWrap>
            <ProjectsImages
              className='cards__item__img'
              alt='test'
              src={props.src}
            />
          </ProjectItemPicWrap>
          <ProjectItemInfo>
            <h5>{props.text}</h5>
          </ProjectItemInfo>
        </StyledLink>
      </ProjectItem>
    </>
  );
};

//Styled Components
const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17); */
  /* -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017)); */
  /* filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017)); */
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`

const ProjectItem = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  background: #172a45;
  /* padding: 0rem; */
  border-radius: 10px;
`;

const ProjectItemInfo = styled.div`
  padding: 20px 30px 30px;
  h5{
    color: white;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;

const ProjectItemPicWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
  &:after{
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;

const ProjectsImages = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  &:hover{
    transform: scale(1.1);
  }
`;

export default Projects;
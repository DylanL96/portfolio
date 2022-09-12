import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {projectState} from '../projectState';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  //Setting our states
  // eslint-disable-next-line 
  const [projects, setProjects] = useState(projectState);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = projects.filter((stateProject => stateProject.url === url))
    setProject(currentProject[0]);
  }, [projects, url])

  return (
    <>
    {project && (
      <DetailsOverView exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <HeadLine>
        <h2>{project.title}</h2>
        </HeadLine>
        <Githublink><a href={project.github}><i className="fab fa-github-square fa-2x"></i></a></Githublink>
        <Details>
          <h4>What Is It?</h4>
          <p>{project.content}</p>
          <h4 className="learn">What did I learn?</h4>
          <p className="learnText">{project.learning}</p>
          <h4 className="technologies">Technologies Used?</h4>
          <p className="tech">{project.tech}</p>
        </Details>
      </DetailsOverView>
    )}
    </>
  )
};

//Styled Components
const Details = styled.div`
  /* border: 1px solid white; */
  margin: 0rem 0rem 0rem 3rem;
  width: 90rem;
  h4{
    text-decoration: underline;
  }
  @media(max-width: 1300px){
    p{
      width: 50vh;
    }
  }
`;

const DetailsOverView = styled(motion.div)`
  border-radius: 10px;
  /* border: 1px solid white; */
  p{
    position: relative;
    bottom: 30px;
  }
  .learn{
    position: relative;
    bottom: 30px;
  }
  .learnText{
    position: relative;
    bottom: 60px;
  }
  .technologies{
    position: relative;
    bottom: 60px;
  }
  .tech{
    position: relative;
    bottom: 90px;
  }
`;

const HeadLine = styled.div`
/* border: 1px solid white; */
  h2{
    text-align: center;
    text-decoration: underline;
  }
`;

const Githublink = styled.div`
text-align: center;
`;

export default ProjectDetail;
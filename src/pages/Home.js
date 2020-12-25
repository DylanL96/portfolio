import React from 'react';
import LandingSection from '../components/LandingSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const Home = () => {
  return (
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <LandingSection/>
      <AboutSection/>
      <ProjectSection/>
    </motion.div>
  )
};

export default Home;
import React from 'react';
import './about_me.css';
import { motion } from 'framer-motion';
import mypic from "../src/images/mypic.jpg";

const AboutMe = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }} 
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="about_me"
      id="aboutMe"
    >
      <h2 className="heading down_gap">About Me</h2>
      <div className="about_me_info">
        <div className="about_me_left">
          <b>Hi, I'm Jaisika Dhiman! 👋</b><br /><br />
          I’m a passionate MERN Stack Developer with expertise in building dynamic and scalable web applications using <b>MongoDB, Express.js, React.js, and Node.js</b>. I recently completed <b>6 months of training at</b> <b>Toxsl Technologies Pvt. Ltd.</b>, where I enhanced my skills in developing robust web solutions and delivering seamless user experiences.<br /><br />
          I take pride in writing clean, efficient code and constantly strive to learn, innovate, and collaborate on exciting projects. Let’s build something amazing together!
        </div>
        
        <div className="my-pic">
          <img
            className="behind_the_image"
            src={mypic}
            alt="Behind the image"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;

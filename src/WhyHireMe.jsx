import React from "react";
import "./why.css";
import { motion } from "framer-motion";

const WhyHireMe = () => {
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
      className="why_hire_me_section"
    >
      <h2 className="heading1">Why Hire Me?</h2>
      
      <div className="why_hire_me_content">
        <div className="mid_text">
          <p>
            I am a passionate and motivated MERN stack developer with a strong foundation in building scalable, responsive, and user-friendly web applications. Proficient in React.js, Node.js, Express.js, and MongoDB, I am eager to contribute to innovative projects and grow as a developer.
          </p><br/><br/>
          <p>
            During my training and personal projects, I have successfully built applications such as an e-commerce platform and a task management tool, where I implemented features like user authentication and responsive design. These experiences have honed my problem-solving skills and attention to detail.
          </p><br/>
          <p>
            I thrive in collaborative environments and believe in clear communication to align with team goals. As a quick learner, I am always exploring new technologies and best practices to stay updated in the ever-evolving world of web development.
          </p><br/><br/>
          <p>
            If you're looking for a dedicated and enthusiastic developer who is ready to learn and contribute to your team, let's connect! I'd love to discuss how I can add value to your projects.
          </p>
        </div>
        
      </div>
    </motion.div>
  );
};

export default WhyHireMe;


// import './main.css';
// import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll';



// const Navbar = () => {
  
//   return (
//     <>
//       <div className='navbar'>
//         <div className="left">
//           <h2 className='title'>Portfolio</h2>
//         </div>
//         <div className="right">
//           <ScrollLink
//             to="mainy"
//             spy={true}
//             smooth={true}
//             offset={-140} // Adjust offset if you have a fixed header
//             duration={600} // Animation duration in milliseconds
//             className='button'
//           >
//             Home
//           </ScrollLink>
//           <ScrollLink
//             to="aboutMey"
//             spy={true}
//             smooth={true}
//             offset={-140} // Adjust offset if you have a fixed header
//             duration={600} // Animation duration in milliseconds
//             className='button'
//           >
//             About Me
//           </ScrollLink>
//           <ScrollLink
//             to="skills"
//             spy={true}
//             smooth={true}
//             offset={-140} // Adjust offset if you have a fixed header
//             duration={600} // Animation duration in milliseconds
//             className='button'
//           >
//             Skills
//           </ScrollLink>
//           <ScrollLink
//             to="project"
//             spy={true}
//             smooth={true}
//             offset={-140} // Adjust offset if you have a fixed header
//             duration={600} // Animation duration in milliseconds
//             className='button'
//           >
//             Projects
//           </ScrollLink>
//           <ScrollLink
//             to="contact"
//             spy={true}
//             smooth={true}
//             offset={-140} // Adjust offset if you have a fixed header
//             duration={600} // Animation duration in milliseconds
//             className='button'
//           >
//             Contact Me
//           </ScrollLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import './main.css';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='navbar'>
        <div className="left">
          <h2 className='title'>Portfolio</h2>
        </div>
        
        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Menu Items */}
        <div className={`right ${isOpen ? 'active' : ''}`}>
          <ScrollLink to="mainy" spy={true} smooth={true} offset={-140} duration={600} className='button'>Home</ScrollLink>
          <ScrollLink to="aboutMey" spy={true} smooth={true} offset={-140} duration={600} className='button'>About Me</ScrollLink>
          <ScrollLink to="skills" spy={true} smooth={true} offset={-140} duration={600} className='button'>Skills</ScrollLink>
          <ScrollLink to="project" spy={true} smooth={true} offset={-140} duration={600} className='button'>Projects</ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-140} duration={600} className='button'>Contact Me</ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

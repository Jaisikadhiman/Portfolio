import React from "react";
import Card from "./Card";
import spotify from "./images/spotify_clone.png";
import QuickShop from "./images/e-commerce.jpg";
import DevFlow from "./images/DevFlow.webp";
import HealthSphere from "./images/healthSphere.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const cards = [
    {
      imageUrl: QuickShop,
      altText: "QuickShop",
      title: "QuickShop",
      description:
        '"A full-featured QuickShop built with React.js and Node.js, offering secure authentication via Nodemailer and Twilio, dynamic product listings, wishlist and cart management, order confirmation, and a seamless checkout process with Stripe integration for secure payments. Designed for a smooth and efficient online shopping experience."',
      explore: "https://github.com/Jaisikadhiman/E-Commerce",
    },
    {
      imageUrl: spotify,
      altText: "Resataurant website",
      title: "Spotify Clone",
      description:
        "A dynamic and responsive music streaming web app built with React.js. Features include a modern UI, music playback, playlist management, and song search for an immersive user experience. 🎵",
      explore: "https://github.com/Jaisikadhiman/Spotify_clone",
    },
    ,
    {
      imageUrl: DevFlow,
      altText: "Canyons",
      title: "DevFlow",
      description:
        "A full-stack web application built with React.js and Node.js, offering seamless user authentication, dynamic CRUD operations, file uploads, and profile management. Designed for a smooth and efficient user experience.",
      explore: "https://github.com/Jaisikadhiman/Mern_Project",
    },
    {
      imageUrl: HealthSphere,
      altText: "HealthSphere",
      title: "HealthSphere",
      description:
        "A healthcare platform built with React.js and Node.js, offering secure user authentication and role-based access for Admin, Doctor, and Patient panels. Patients can book appointments, Doctors can manage schedules, and Admins can oversee doctor profiles and user listings, ensuring seamless interaction across all roles.",
      explore: "https://github.com/Jaisikadhiman/Hospital-Management-System",
    },
  ];

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
        margin: "-100px",
        once: true,
      }}
      className="up_gap "
      id="project"
    >
      <h2 className="heading1 down_gap">Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

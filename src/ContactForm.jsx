
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { PulseLoader } from "react-spinners"; // Import spinner
import Swal from "sweetalert2"; // Import SweetAlert
import BackToTopButton from "./BackToTopButton";
import "./stylle.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://portfolio-cfe4.onrender.com/api/send",
        formData
      );

      setLoading(false); // Stop loading

      Swal.fire({
        icon: "success",
        title: "Email Sent Successfully!",
        text: "We will get back to you soon.",
        confirmButtonColor: "#3085d6",
      });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false); // Stop loading in case of error

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <section id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:7060774755" title="Give me a call">
                  +91-7060XXXXXX
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a
                  href="mailto:jaisikadhiman446@gmail.com"
                  title="Send me an email"
                >
                  jaisikadhiman446@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            {/* <li>
              <a
                href="https://github.com/Jaisikadhiman"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </a>
            </li>
          
            <li>
              <a
                href="https://www.linkedin.com/in/jaisika-dhiman"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </li> */}
            <li>
  <a
    href="https://github.com/Jaisikadhiman"
    target="_blank"
    className="contact-icon"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
  </a>
</li>
<li>
  <a
    href="https://www.linkedin.com/in/jaisika-dhiman"
    target="_blank"
    className="contact-icon"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
  </a>
</li>
          </ul>
          <hr />
        </div>
        <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control Name"
                id="name"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control Mail"
                id="email"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <textarea
            className="form-control1"
            rows="10"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <PulseLoader size={10} color={"#fff"} /> // Show spinner while loading
            ) : (
              <div className="alt-send-button">
                <FontAwesomeIcon icon={faPaperPlane} className="fa" />
                <span className="send-text">SEND</span>
              </div>
            )}
          </button>
        </form>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;

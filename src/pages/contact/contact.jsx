import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import { motion } from "framer-motion";
import {
  smoothEase,
  hoverEase,
  sectionViewport,
  staggerContainer,
  fadeInUp,
} from "../../utils/motion";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -16,
      y: 16,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.86, ease: smoothEase },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 16,
      y: 16,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.88, ease: smoothEase },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_rwfnokc", "template_th4rcsg", formData, "52iljLFXnqCyso1I9")
      .then(
        () => {
          toast.success("Message sent successfully!", { theme: "colored" });
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.", { theme: "colored" });
        }
      );
  };

  return (
    <motion.section
      className="contact section"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="shooting_stars" aria-hidden="true">
        <span className="shooting_star star_one" />
        <span className="shooting_star star_two" />
        <span className="shooting_star star_three" />
        <span className="star_dot dot_one" />
        <span className="star_dot dot_two" />
        <span className="star_dot dot_three" />
      </div>
      {/* Animated Section Title */}
      <motion.h2 className="section_title" variants={fadeInUp}>
        Get In<span>Touch</span>
      </motion.h2>

      <div className="contact_container container grid">
        {/* Left Info Section */}
        <motion.div
          className="contact_data"
          variants={leftVariants}
          whileHover={{
            y: -2,
            transition: { duration: 0.45, ease: hoverEase },
          }}
        >
          <h3 className="contact_title">Let's Build Something Great</h3>
          <p className="contact_description">
            I am open to new projects, product design work, and front-end roles.
            If you want fast, polished UI with an AI-accelerated workflow, let's talk.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />
              <div>
                <span className="info_title">Mail me</span>
                <a className="info_desc" href="mailto:rrabir9815@gmail.com">
                  rrabir9815@gmail.com
                </a>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />
              <div>
                <span className="info_title">Call me</span>
                <a className="info_desc" href="tel:+9779815811311">
                  +977-9815811311
                </a>
              </div>
            </div>

            <div className="contact_socials">
              <a href="https://github.com/rrabir12" target="_blank" rel="noreferrer" className="contact_social_link">
                <FaGithubAlt />
              </a>
              <a href="https://www.linkedin.com/in/rabi-roy-821466272" target="_blank" rel="noreferrer" className="contact_social_link">
                <FaLinkedinIn />
              </a>
              <a href="https://www.behance.net/kingroy9" target="_blank" rel="noreferrer" className="contact_social_link">
                <FaBehance />
              </a>
              <a href="https://dribbble.com/king-roy" target="_blank" rel="noreferrer" className="contact_social_link">
                <FaDribbble />
              </a>
              <a href="https://www.instagram.com/i_rabiroy/" target="_blank" rel="noreferrer" className="contact_social_link">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100067461679136" target="_blank" rel="noreferrer" className="contact_social_link">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact_form"
          variants={rightVariants}
          whileHover={{
            y: -2,
            transition: { duration: 0.45, ease: hoverEase },
          }}
        >
          <div className="form_input_group">
            <div className="form_input_div">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form_control"
                required
              />
            </div>
            <div className="form_input_div">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="form_control"
                required
              />
            </div>
          </div>

          <div className="form_input_group">
            <div className="form_input_div">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                className="form_control"
                required
              />
            </div>
            <div className="form_input_div">
              <PhoneInput
                country={"np"}
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Your Number"
                containerClass="phone_input_container"
                inputClass="phone_input"
                buttonClass="phone_button"
                inputStyle={{
                  height: "48px",
                  width: "100%",
                  borderRadius: "16px",
                  backgroundColor: "var(--container-color)",
                  border: "1px solid var(--border-color)",
                  color: "var(--title-color)",
                }}
                dropdownStyle={{ backgroundColor: "var(--container-color)" }}
              />
            </div>
          </div>

          <div className="form_input_div">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form_control textarea"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Button Animation */}
          <motion.button
            type="submit"
            className="button"
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message{" "}
            <span className="button_icon contact_button_icon">
              <FiSend />
            </span>
          </motion.button>
        </motion.form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.section>
  );
}

export default Contact;

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
          toast.success("Message sent successfully!", { theme: "dark" });
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.", { theme: "dark" });
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      {/* Animated Section Title */}
      <motion.h2
        className="section_title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In<span>Touch</span>
      </motion.h2>

      <div className="contact_container container grid">
        {/* Left Info Section */}
        <motion.div
          className="contact_data"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="contact_title">Don't be Shy!</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">rrabir9815@gmail.com</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">+977-9815811311</h4>
              </div>
            </div>

            <div className="contact_socials">
               <a href="https://github.com/rrabir12" target="_blank" className="contact_social_link">
                <FaGithubAlt className="!mt-3 !ms-3" />
              </a>
              <a href="www.linkedin.com/in/rabi-roy-821466272" target="_blank" className="contact_social_link">
                <FaLinkedinIn className="!mt-3 !ms-3" />
              </a>
              <a href="https://www.behance.net/kingroy9" target="_blank" className="contact_social_link">
                <FaBehance className="!mt-3 !ms-3" />
              </a>
              <a href="https://dribbble.com/king-roy" target="_blank" className="contact_social_link">
                <FaDribbble className="!mt-3 !ms-3" />
              </a>
              <a href="https://www.instagram.com/i_rabiroy/" target="_blank" className="contact_social_link">
                <FaInstagram className="!mt-3 !ms-3" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100067461679136" target="_blank" className="contact_social_link">
                <FaFacebookF className="!mt-3 !ms-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact_form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
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
                  height: "45px",
                  width: "343px",
                  borderRadius: "30px",
                  backgroundColor: "var(--container-color)",
                  border: "none",
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
              <FiSend className="!mt-5 !ms-4" />
            </span>
          </motion.button>
        </motion.form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;

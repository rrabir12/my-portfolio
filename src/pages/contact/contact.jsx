import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rwfnokc", 
        "template_th4rcsg", 
        form.current,
        "52iljLFXnqCyso1I9" 
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In<span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't be Shy!</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
              <a href="https://www.facebook.com/profile.php?id=100067461679136" target="_blank" className="contact_social_link"><FaFacebookF /></a>
              <a href="https://github.com/rrabir12" target="_blank" className="contact_social_link"><FaGithubAlt /></a>
              <a href="www.linkedin.com/in/rabi-roy-821466272" target="_blank" className="contact_social_link"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/i_rabiroy/" target="_blank" className="contact_social_link">< FaInstagram /></a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="form_input_group">
            <div className="form_input_div">
              <input type="text" name="user_name" placeholder="Your Name" className="form_control" required />
            </div>

            <div className="form_input_div">
              <input type="email" name="user_email" placeholder="Your Email" className="form_control" required />
            </div>

            <div className="form_input_div">
              <input type="text" name="subject" placeholder="Your Subject" className="form_control" required />
            </div>
          </div>

          <div className="form_input_div">
            <textarea name="message" className="form_control textarea" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="button" style={{cursor: "pointer"}}>
            Send Message <span className="button_icon contact_button_icon"><FiSend /></span>
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;

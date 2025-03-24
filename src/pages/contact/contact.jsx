import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rwfnokc", // Replace with EmailJS Service ID
        "template_th4rcsg", // Replace with EmailJS Template ID
        form.current,
        "52iljLFXnqCyso1I9" // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 5000);
          e.target.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
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
              <a href="https://facebook.com" className="contact_social_link"><FaFacebookF /></a>
              <a href="https://twitter.com" className="contact_social_link"><FaTwitter /></a>
              <a href="https://youtube.com" className="contact_social_link"><FaYoutube /></a>
              <a href="https://dribble.com" className="contact_social_link"><FaDribbble /></a>
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

          {isSent && <p className="success_message">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

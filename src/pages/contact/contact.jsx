import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
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
      .send(
        "service_rwfnokc",
        "template_th4rcsg",
        formData,
        "52iljLFXnqCyso1I9"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
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
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
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
              <a
                href="https://www.facebook.com/profile.php?id=100067461679136"
                target="_blank"
                className="contact_social_link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/rrabir12"
                target="_blank"
                className="contact_social_link"
              >
                <FaGithubAlt />
              </a>
              <a
                href="www.linkedin.com/in/rabi-roy-821466272"
                target="_blank"
                className="contact_social_link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/i_rabiroy/"
                target="_blank"
                className="contact_social_link"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact_form">
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

          <button
            type="submit"
            className="button"
            style={{ cursor: "pointer" }}
          >
            Send Message{" "}
            <span className="button_icon contact_button_icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;

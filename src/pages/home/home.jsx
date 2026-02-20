import React from "react";
import profile from "../../assets/mypic.png";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { smoothEase, sectionViewport, staggerContainer } from "../../utils/motion";

function Home() {
  const contentVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.92, ease: smoothEase },
    },
  };

  const mediaVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.98, ease: smoothEase, delay: 0.12 },
    },
  };

  return (
    <motion.section
      className="home section"
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="container home_container">
        <motion.div className="home_content" variants={contentVariants}>
          <span className="badge">Open to QA Opportunities</span>

          <h1 className="home_title">Rabi Roy</h1>
          <p className="home_subtitle">
            Software Quality Assurance & Technical Support Engineer
          </p>

          <div className="home_roles">
            <Typewriter
              words={[
                "Manual & Automation Testing",
                "API & Performance Testing",
                "Customer Issue Resolution",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </div>

          <p className="home_description">
            Software Quality Assurance & Technical Support Engineer with
            hands-on experience in manual and automation testing, test case
            creation, API and performance testing, and customer issue
            resolution. Driven by continuous learning and building reliable,
            user-centered software products.
          </p>

          <div className="home_actions">
            <a href="#portfolio" className="button">
              View Projects
              <span className="button_icon">
                <FaArrowRight />
              </span>
            </a>
            <a href="#contact" className="button button_outline">
              Let's Talk
            </a>
          </div>

        </motion.div>

        <motion.div className="home_media" variants={mediaVariants}>
          <div className="home_photo_wrap">
            <img src={profile} alt="Rabi Roy portrait" className="home_img" />
            <span className="home_photo_ring" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;

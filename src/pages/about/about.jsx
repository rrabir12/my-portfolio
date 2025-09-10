import React from "react";
import { motion } from "framer-motion";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { GrView } from "react-icons/gr";
import CV from "../../assets/Rabi_Roy_Resume.pdf";
import "./about.css";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import Skills from "../../components/Skills";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

function About() {
  return (
    <section className="section container" id="about">
      {/* About Section */}
      <motion.section
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 className="section_title" variants={fadeInUp}>
          About <span>Me</span>
        </motion.h2>

        <div className="about_container grid">
          <motion.div className="about_info" variants={fadeInUp}>
            <h3 className="section_subtitle">Personal Infos</h3>
            <ul className="info_list grid">
              <Info />
            </ul>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View CV{" "}
              <span className="button_icon">
                <GrView className="!ms-4 !mt-5" />
              </span>
            </a>
          </motion.div>

          <motion.div className="stats grid" variants={fadeInUp}>
            <Stats />
          </motion.div>
        </div>
      </motion.section>

      <div className="seperator"></div>

      {/* Skills Section */}
      {/* <motion.section
        className="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
         <motion.h3 className="section_subtitle subtitle_center" variants={fadeInUp}>
          My Skills
        </motion.h3>
        <motion.div className="skills_container grid" variants={fadeInUp}> */}
          <Skills />
        {/* </motion.div>
      </motion.section> */}

      <div className="seperator"></div>

      {/* Resume Section */}
      <motion.section
        className="resume"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h3 className="section_subtitle subtitle_center" variants={fadeInUp}>
          Experience & Education
        </motion.h3>
        <div className="resume_container grid">
          <motion.div className="resume_data" variants={fadeInUp}>
            {resume.map((val) =>
              val.category === "experience" ? (
                <ResumeItem key={val.id} {...val} />
              ) : null
            )}
          </motion.div>
          <motion.div className="resume_data" variants={fadeInUp}>
            {resume.map((val) =>
              val.category === "education" ? (
                <ResumeItem key={val.id} {...val} />
              ) : null
            )}
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}

export default About;

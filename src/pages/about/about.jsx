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
import {
  hoverEase,
  sectionViewport,
  staggerContainer,
  fadeInUp,
} from "../../utils/motion";

function About() {
  return (
    <section className="section container" id="about">
      {/* About Section */}
      <motion.section
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={staggerContainer}
      >
        <motion.h2 className="section_title" variants={fadeInUp}>
          About <span>Me</span>
        </motion.h2>
        <motion.p className="section_intro" variants={fadeInUp}>
          QA and Technical Support Engineer with hands-on experience in manual
          and automation testing, API/performance testing, and issue
          resolution. My frontend and UI/UX background helps me catch
          usability and functional issues early.
        </motion.p>

        <div className="about_container grid">
          <motion.div
            className="about_info"
            variants={fadeInUp}
            whileHover={{
              y: -2,
              transition: { duration: 0.4, ease: hoverEase },
            }}
          >
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
                <GrView />
              </span>
            </a>
          </motion.div>

          <motion.div
            className="stats grid"
            variants={fadeInUp}
            whileHover={{
              y: -2,
              transition: { duration: 0.4, ease: hoverEase },
            }}
          >
            <h3 className="section_subtitle stats_heading">Professional Snapshot</h3>
            <Stats />
          </motion.div>
        </div>
      </motion.section>

      <div className="seperator"></div>

      {/* Skills Section */}
      <motion.section
        className="skills"
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={staggerContainer}
      >
         {/* <motion.h3 className="section_subtitle subtitle_center" variants={fadeInUp}>
          My Skills
        </motion.h3> */}
        <motion.div
          className=""
          variants={fadeInUp}
          whileHover={{
            y: -2,
            transition: { duration: 0.4, ease: hoverEase },
          }}
        >
          <Skills />
        </motion.div>
      </motion.section> 

      <div className="seperator"></div>

      {/* Resume Section */}
      <motion.section
        className="resume"
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={staggerContainer}
      >
        <motion.h3 className="section_subtitle subtitle_center" variants={fadeInUp}>
          Experience & Education
        </motion.h3>
        <div className="resume_container grid">
          <motion.div
            className="resume_data"
            variants={fadeInUp}
            whileHover={{
              y: -2,
              transition: { duration: 0.4, ease: hoverEase },
            }}
          >
            {resume.map((val) =>
              val.category === "experience" ? (
                <ResumeItem key={val.id} {...val} />
              ) : null
            )}
          </motion.div>
          <motion.div
            className="resume_data"
            variants={fadeInUp}
            whileHover={{
              y: -2,
              transition: { duration: 0.4, ease: hoverEase },
            }}
          >
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

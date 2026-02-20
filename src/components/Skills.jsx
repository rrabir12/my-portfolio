import React, { useState } from "react";
import { skills } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { smoothEase, smoothExit, sectionViewport } from "../utils/motion";
import {
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import {
  FaCode,
  FaBug,
  FaCheckCircle,
  FaPuzzlePiece,
  FaFlask,
  FaTools,
  FaMobileAlt,
  FaUniversalAccess,
  FaUsers,
  FaLightbulb,
  FaTasks,
  FaClock,
  FaComments,
} from "react-icons/fa";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const skillIcons = {
    "Manual Testing": FaBug,
    "Unit Testing": FaCheckCircle,
    "Integration Testing": FaPuzzlePiece,
    Playwright: FaTools,
    Postman: FaTools,
    JMeter: FaFlask,
    "JavaScript (ES6+)": SiJavascript,
    Hooks: FaCode,
    Bootstrap: SiBootstrap,
    "Responsive Design": FaMobileAlt,
    "Usability Testing": FaUniversalAccess,
    Firebase: SiFirebase,
    "User Research": FaUsers,
    "Critical Thinking": FaLightbulb,
    "Problem-Solving": FaTasks,
    Adaptability: FaTools,
    "Team Collaboration": FaUsers,
    "Project Management": FaTasks,
    "Time Management": FaClock,
    "Communication & Presentation": FaComments,
    Figma: SiFigma,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "React.js": SiReact,
    "Tailwind CSS": SiTailwindcss,
    PHP: SiPhp,
    MySQL: SiMysql,
  };

  // Categories generated from skills data
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  // Filter skills
  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: smoothEase },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    visible: (custom = {}) => {
      const index =
        typeof custom === "number" ? custom : Number(custom.index ?? 0);

      return {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.62,
          ease: smoothEase,
          delay: index * 0.065,
        },
      };
    },
    exit: ({ index, total }) => ({
      opacity: 0,
      y: 10,
      scale: 0.99,
      transition: {
        duration: 0.3,
        ease: smoothExit,
        delay: (total - index - 1) * 0.03,
      },
    }),
  };

  return (
    <section className="skills section" id="skills">
      {/* Section Title */}
      <motion.h2
        className="section_subtitle subtitle_center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: smoothEase }}
        viewport={sectionViewport}
      >
        My Skills
      </motion.h2>

      {/* Tabs */}
      <div className="skills_filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`skills_filter ${
              activeTab === cat ? "is-active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Skills Grid */}
      <motion.div
        className="skills_container container grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredSkills.map(({ title }, index) => {
            const SkillIcon = skillIcons[title] || FaCode;

            return (
              <motion.div
                key={`${activeTab}-${title}`}
                className="progress_box"
                variants={itemVariants}
                custom={{ index, total: filteredSkills.length }}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ layout: { duration: 0.55, ease: smoothEase } }}
                aria-label={title}
              >
                <div className="skill_logo_wrap" aria-hidden="true">
                  <SkillIcon className="skill_logo" />
                </div>
                <h3 className="skills_title">{title}</h3>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;

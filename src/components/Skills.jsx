import React, { useState } from "react";
import { skills } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { smoothEase, smoothExit, sectionViewport, staggerContainer, fadeInUp } from "../utils/motion";
import {
  SiApachejmeter,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPostman,
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
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 576);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const skillIcons = {
    "Manual Testing": FaBug,
    "Unit Testing": FaCheckCircle,
    "Integration Testing": FaPuzzlePiece,
    Playwright: FaTools,
    Postman: SiPostman,
    JMeter: SiApachejmeter,
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
  const skillIconColors = {
    "Manual Testing": "logo_manual_testing",
    "Unit Testing": "logo_unit_testing",
    "Integration Testing": "logo_integration_testing",
    Playwright: "logo_playwright",
    Postman: "logo_postman",
    JMeter: "logo_jmeter",
    "JavaScript (ES6+)": "logo_javascript",
    Hooks: "logo_hooks",
    Bootstrap: "logo_bootstrap",
    "Responsive Design": "logo_responsive",
    "Usability Testing": "logo_usability",
    Firebase: "logo_firebase",
    "User Research": "logo_softskill",
    "Critical Thinking": "logo_softskill",
    "Problem-Solving": "logo_softskill",
    Adaptability: "logo_softskill",
    "Team Collaboration": "logo_softskill",
    "Project Management": "logo_softskill",
    "Time Management": "logo_softskill",
    "Communication & Presentation": "logo_softskill",
    Figma: "logo_figma",
    HTML5: "logo_html",
    CSS3: "logo_css",
    "React.js": "logo_react",
    "Tailwind CSS": "logo_tailwind",
    PHP: "logo_php",
    MySQL: "logo_mysql",
  };

  // Categories generated from skills data
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  // Filter skills
  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  // Use shared motion variants from utils

  const itemReveal = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  // Stagger reveal: increment visibleCount on mount / when tab changes
  React.useEffect(() => {
    if (isMobile) return;

    setVisibleCount(0);
    const interval = 700; // ms between each card reveal
    const timers = [];

    for (let i = 0; i < filteredSkills.length; i++) {
      const t = setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * interval);
      timers.push(t);
    }

    return () => timers.forEach((t) => clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, isMobile]);

  // Render static markup for mobile to avoid viewport-triggered animation hiding
  if (isMobile) {
    return (
      <section className="skills section" id="skills">
        <h2 className="section_subtitle subtitle_center">My Skills</h2>

        <div className="skills_filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`skills_filter ${activeTab === cat ? "is-active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills_container container grid">
          {filteredSkills.map(({ title }) => {
            const SkillIcon = skillIcons[title] || FaCode;
            const logoColorClass = skillIconColors[title] || "";

            return (
              <div key={`${activeTab}-${title}`} className="progress_box" aria-label={title}>
                <div className="skill_logo_wrap" aria-hidden="true">
                  <SkillIcon className={`skill_logo ${logoColorClass}`} />
                </div>
                <h3 className="skills_title">{title}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="skills section"
      id="skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      {/* Section Title */}
      <motion.h2 className="section_subtitle subtitle_center" variants={fadeInUp}>
        My Skills
      </motion.h2>

      {/* Tabs */}
      <motion.div className="skills_filters" variants={fadeInUp}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`skills_filter ${activeTab === cat ? "is-active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div className="skills_container container grid" variants={fadeInUp}>
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredSkills.map(({ title }, index) => {
            const SkillIcon = skillIcons[title] || FaCode;
            const logoColorClass = skillIconColors[title] || "";
            const isVisible = index < visibleCount;

            return (
              <motion.div
                key={`${activeTab}-${title}`}
                className={`progress_box ${isVisible ? "is-visible" : "is-hidden"}`}
                variants={itemReveal}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                layout
                transition={{ duration: 0.45, ease: smoothEase }}
                aria-label={title}
              >
                <div className="skill_logo_wrap" aria-hidden="true">
                  <SkillIcon className={`skill_logo ${logoColorClass}`} />
                </div>
                <h3 className="skills_title">{title}</h3>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

export default Skills;

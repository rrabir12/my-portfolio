import React, { useState } from "react";
import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  // Categories (dynamic from skills data or hardcoded)
  const categories = ["All", "Frontend", "UI/UX", "Backend", "Database", "Tools",];

  // Filter skills
  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section className="skills section" id="skills">
      {/* Section Title */}
      <motion.h2
        className="section_subtitle subtitle_center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Tabs */}
  <div className="flex flex-wrap justify-center gap-3 !mb-10 w-full">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveTab(cat)}
      className={`!px-6 !py-2 cursor-pointer rounded-full font-medium transition-all duration-300 transform
        ${
          activeTab === cat
            ? "!bg-[#6856AE] text-white shadow-lg scale-105"
            : "text-[#666666] hover:!text-[#6856AE] hover:shadow-md font-semibold"
        }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Skills Grid */}
      <motion.div
        className="skills_container container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatePresence>
          {filteredSkills.map(({ title, percentage }, index) => (
            <motion.div
              key={index}
              className="progress_box flex flex-col items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <div className="progress_circle w-24 h-24 mb-3">
                <CircularProgressbar
                  strokeWidth={7.5}
                  text={`${percentage}%`}
                  value={percentage}
                />
              </div>
              <h3 className="skills_title text-center font-semibold text-sm">
                {title}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;

import React, { useState } from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import { motion, AnimatePresence } from "framer-motion";
import { smoothEase, smoothExit, hoverEase, sectionViewport, fadeInUp } from "../../utils/motion";
import "./portfolio.css";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  // Categories (dynamic or hardcoded)
  const categories = ["All", "Website", "Design", "Mobile"];

  // Filter portfolio items
  const filteredPortfolio =
    activeTab === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeTab);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: smoothEase, staggerChildren: 0.06, delayChildren: 0.03 },
    },
  };

  return (
    <motion.section
      className="portfolio section"
      id="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="shooting_stars" aria-hidden="true">
        <span className="shooting_star star_one" />
        <span className="shooting_star star_two" />
        <span className="shooting_star star_three" />
        <span className="star_dot dot_one" />
        <span className="star_dot dot_two" />
        <span className="star_dot dot_three" />
      </div>
      {/* Section Title */}
      <motion.h2
        className="section_title"
        variants={fadeInUp}
      >
        Selected <span>Projects</span>
      </motion.h2>

      <motion.p
        className="section_intro"
        variants={fadeInUp}
      >
        A curated mix of web apps, UI/UX design, and client work showcasing clean
        interfaces, strong UX, and modern development practices.
      </motion.p>

      {/* Tabs */}
      <div className="portfolio_filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`portfolio_filter ${
              activeTab === cat ? "is-active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <motion.div
        className="portfolio_container container grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredPortfolio.map((item, index) => {
            // Alternate slide direction
            const directionVariant = {
              hidden: {
                opacity: 0,
                x: index % 2 === 0 ? -16 : 16,
                y: 20,
                scale: 0.985,
              },
              visible: ({ index: itemIndex }) => ({
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: smoothEase,
                  delay: itemIndex * 0.05,
                },
              }),
              exit: ({ index: itemIndex, total }) => ({
                opacity: 0,
                y: 10,
                scale: 0.99,
                transition: {
                  duration: 0.26,
                  ease: smoothExit,
                  delay: (total - itemIndex - 1) * 0.02,
                },
              }),
            };

            return (
              <motion.div
                key={`${activeTab}-${item.id}`}
                variants={directionVariant}
                custom={{ index, total: filteredPortfolio.length }}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.42, ease: hoverEase },
                }}
                layout
                transition={{ layout: { duration: 0.6, ease: smoothEase } }}
              >
                <PortfolioItem {...item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

export default Portfolio;

import React, { useState } from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import { motion, AnimatePresence } from "framer-motion";
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="portfolio section" id="portfolio">
      {/* Section Title */}
      <motion.h2
        className="section_title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span>Project</span>
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center !gap-3 !mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`relative cursor-pointer !px-6 !py-2 rounded-full font-medium transition-all duration-300 transform 
        ${
          activeTab === cat
            ? "!bg-[#6856AE] text-white shadow-lg scale-105"
            : "bg-white text-[#666666] hover:text-[#6856AE] hover:shadow-md font-semibold"
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
        viewport={{ once: true, amount: 0.001 }} // triggers when 20% of the section is visible
      >
        <AnimatePresence>
          {filteredPortfolio.map((item, index) => {
            // Alternate slide direction
            const directionVariant = {
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
              exit: { opacity: 0, y: 30 },
            };

            return (
              <motion.div
                key={item.id}
                variants={directionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <PortfolioItem {...item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Portfolio;

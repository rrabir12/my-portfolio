import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import { motion } from "framer-motion";
import "./portfolio.css";

function Portfolio() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // delay between items
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        {/* Section Title Animation */}
        <motion.h2
          className="section_title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Project</span>
        </motion.h2>

        {/* Container Animation */}
        <motion.div
          className="portfolio_container container grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolio.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <PortfolioItem {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Portfolio;

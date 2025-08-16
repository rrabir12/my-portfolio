import React from "react";
import profile from "../../assets/mypic.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home section min-!h-screen !mt-[70px] !px-6 md:!px-12 lg:!px-20 lg:flex !items-center" id="home">
      {/* Profile Image Animation */}
      <motion.img
        src={profile}
        alt="Profile"
        className="!w-100 !h-100 object-cover !rounded-[30px] shadow-lg !mx-auto"
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Content Animation */}
      <motion.div
        className="!flex !flex-col !max-w-xl !mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="home_data">
          <motion.h1
            className="home_title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="whitespace-nowrap">Hi, I'm Rabi Roy.</span>
          </motion.h1>

          {/* Typewriter stays as is */}
          <div className="type lg:!pl-18 font-[700]">
            <Typewriter
              words={["Web Developer", "UI/UX Designer", "Freelancer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </div>

          {/* Paragraph animation */}
          <motion.p
            className="home_description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            I'm a frontend developer & web designer focused on crafting clean &
            user-friendly experiences. I am passionate about building excellent
            software that improves the lives of those around me.
          </motion.p>

          {/* Button animation */}
          <motion.a
            href="#about"
            className="button inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More About Me
            <span className="button_icon">
              <FaArrowRight className="!mt-5 !ms-4" />
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* <div className="color_block"></div> */}
    </section>
  );
}

export default Home;

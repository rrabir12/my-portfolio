import React from "react";
import profile from "../../assets/mypic.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <>
      <section className="home section grid" id="home">
        <img src={profile} alt="" className="home_img" />

        <div className="home_content">
          <div className="home_data">
            <h1 className="home_title">
              <span>I'm Rabi Kumar Roy.</span> Web Developer
            </h1>

            <p className="home_description">
              I'm a web designer & front-end developer focused on crafting clean
              & user-friendly experience, I am passionate about building
              excelent software that improves the lives of those around me.
            </p>

            <a href="#about" className="button">
              More About Me{" "}
              <span className="button_icon">
                <FaArrowRight className="!mt-5 !ms-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="color_block"></div>
      </section>
    </>
  );
}

export default Home;

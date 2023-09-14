import React from "react";
import "./About.css";
import Image from "../../components/home/diva.png";
import Resume from "../../assets/djresume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Hello! I'm Divakar Jha, currently residing in Jalandhar, India. I'm a dedicated Computer Science and Engineering student at Lovely Professional University. I have a passion for self-improvement and thrive on acquiring new skills. Over time, I've honed my proficiency in both C++ and Javascript!! <br/>
            Recently, I've delved into Front-End Web Development, gaining expertise in HTML, CSS, and JavaScript. I've also expanded my knowledge to include Tailwind CSS and continue to explore new facets of web development. Along the way, I've undertaken various projects to apply and reinforce my web development skills.
            During my journey, I've had the opportunity to work as a front-end developer at Shoopeal Tech, where I contributed significantly to projects such as Student Result Management System. I was responsible for designing the entire dashboard section, showcasing my front-end development skills.
            Looking ahead, I'm excited to broaden my knowledge in MERN (MongoDB, Express.js, React, Node.js) and explore Back-End Web Development. These are just a few areas where I excel, and I'm enthusiastic about the limitless opportunities that lie ahead in my journey as a developer and programmer.
            </p>
            <ul className="about__list">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Bootstrap & Tailwind CSS</li>
              <li>C++</li>
              <li>SQL</li>
              <li>Firebase</li>
              <li>Figma</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
            </ul>
            <button class="blob-btn" onClick={downloadResume}>
              Donwload CV
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};
export default About;

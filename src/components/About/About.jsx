import React from "react";
import "./about.css";
import AboutImg from "../../Assets/Track.JPG";
import CV from "../../Assets/King-CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A little about me</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img"></img>
        <div className="about__data">
          <Info />

          <p className="about__description">
            I am Computer Science student currently studying to recieve his
            masters degree. I have a passion for learning new things and I am
            always looking for new challenges. I am currently looking for a job
            in the field of software development.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="arrow-circle-up"
            >
              <path
                fill="var(--container-color)"
                d="M12.71,8.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,11.41V15a1,1,0,0,0,2,0V11.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

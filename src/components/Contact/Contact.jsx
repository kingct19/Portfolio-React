import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="Contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Let's Talk</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data"></span>

              <a href className="contact__buttton">
                Kingchandler19@gmail.com
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Call</h3>
              <span className="contact__card-data"></span>

              <a href className="contact__buttton">
                903-424-4805
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn Profile</h3>
              <span className="contact__card-data"></span>

              <a href className="contact__buttton">
                Chandler King
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">What Can I Do For You?</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert Name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert Email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Leave A Message</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Leave a message"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <svg
                className="Send__icon"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01" />
                <path
                  d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z"
                  stroke="black"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.0083 24.0083L29.6651 18.3515"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

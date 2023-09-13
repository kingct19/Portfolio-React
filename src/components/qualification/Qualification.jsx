import React from "react";
import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-book qualification__icon"></i>
            Classes
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School Diploma</h3>
                <span className="qualification__subtitle">
                  Hughes Springs High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2008-2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Degree in Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2024
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Programming Mobile Devices
                </h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Summer 1 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Info Security</h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Spring 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Networks</h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Spring 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Computer Architecture</h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Spring 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Ethics, Law, and Cyber Security
                </h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Spring 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Applied Data Analytics with Python
                </h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Fall 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Operating Systems</h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Fall 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  App Software Project Dev
                </h3>
                <span className="qualification__subtitle">
                  Texas A&M University-Commerce
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Spring 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

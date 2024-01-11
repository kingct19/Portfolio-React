import React from "react";
import "./porfolio.css";

function portfolio() {
  return (
    <section className="portfolio section" id="Portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>
      <div className="port__container container grid">
        <div className="port__content">
          <h3 className="port__title">Projects</h3>
          <div className="port__box">
            <div className="port__group">
              <div className="port__data">
                <div className="port__name">
                  <h3 className="port__names">F.I.S.H</h3>
                  <span className="port__data">
                    This porject is called first indicatot of salary and hours..
                    which is a mobile application using the dart to make a fully
                    function app to track employee hours and work schedule. for
                    the Backend i ended up using firebase firestore to remember
                    user IDs and login. It also tracked the hours in whch the
                    employee has worked.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="port__content">
          <h3 className="port__title">Tiffany King Home Staging</h3>
          <div className="port__box">
            <div className="port__group">
              <div className="port__data">
                <div className="port__name">
                  <h3 className="port__names">Web-Development</h3>
                  <span className="port__data">
                    In this project i created a home staging website for a
                    client. the website gets potential sellers that are ready to
                    decorate their homes. I implemented google SEO to boost the
                    traffic to the website.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="port__content">
          <h3 className="port__title">F.I.S.H</h3>
          <div className="port__box">
            <div className="port__group">
              <div className="port__data">
                <div className="port__name">
                  <h3 className="port__names">Mobile Development</h3>
                  <span className="port__data">
                    This project is called first indicator of salary and hours,
                    which is a mobile application using the dart to make a fully
                    function app to track employee hours and work schedule. for
                    the Backend i ended up using firebase firestore to remember
                    user IDs and login. It also tracked the hours in whch the
                    employee has worked.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default portfolio;

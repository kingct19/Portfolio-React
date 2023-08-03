import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title"> Front-End development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="skills__name">
              <h3 className="skills__names">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="skills__name">
              <h3 className="skills__names">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>

            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div className="skills__name">
                <h3 className="skills__names">JAVASCRIPT</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="skills__name">
              <h3 className="skills__names">React JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="skills__name">
              <h3 className="skills__names">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

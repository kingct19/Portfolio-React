import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Gradute Student</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">CS Degree</span>
      </div>

      <div className="about__box">
        <i class="bx bx-laptop about__icon"></i>
        <h3 className="about__title">Git Hub</h3>
        <span className="about__subtitle">See My Projects</span>
      </div>
    </div>
  );
};

export default Info;

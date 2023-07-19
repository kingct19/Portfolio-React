import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/chandler.t.king/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/chandler-king-052861240/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/kingct19"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a href="" className="home__social-icon" target="_blank">
        <i class="uil uil-facebook"></i>
      </a>
    </div>
  );
};

export default Social;

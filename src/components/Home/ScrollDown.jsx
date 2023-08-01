import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#About" className="home__scroll-button button--flex">
        <svg
          className="Mouse__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z" />
          <path d="M11 6h2v6h-2z" />
        </svg>
        <span className="home__scroll-name">Scroll down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;

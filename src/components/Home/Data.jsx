import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Hi, I'm Chandler
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="mdi-hand-wave-outline"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M7.03 4.95L3.5 8.5C.17 11.81 .17 17.19 3.5 20.5S12.19 23.83 15.5 20.5L21.5 14.5C22.5 13.53 22.5 11.94 21.5 10.96C21.4 10.84 21.27 10.73 21.13 10.64L21.5 10.25C22.5 9.28 22.5 7.69 21.5 6.71C21.36 6.55 21.17 6.41 21 6.3C21.38 5.38 21.21 4.28 20.46 3.53C19.59 2.66 18.24 2.57 17.26 3.25C17.16 3.1 17.05 2.96 16.92 2.83C15.95 1.86 14.36 1.86 13.38 2.83L10.87 5.34C10.78 5.2 10.67 5.07 10.55 4.95C9.58 4 8 4 7.03 4.95M8.44 6.37C8.64 6.17 8.95 6.17 9.15 6.37S9.35 6.88 9.15 7.08L5.97 10.26C7.14 11.43 7.14 13.33 5.97 14.5L7.38 15.91C8.83 14.46 9.2 12.34 8.5 10.55L14.8 4.25C15 4.05 15.31 4.05 15.5 4.25S15.71 4.76 15.5 4.96L10.91 9.56L12.32 10.97L18.33 4.96C18.53 4.76 18.84 4.76 19.04 4.96C19.24 5.16 19.24 5.47 19.04 5.67L13.03 11.68L14.44 13.09L19.39 8.14C19.59 7.94 19.9 7.94 20.1 8.14C20.3 8.34 20.3 8.65 20.1 8.85L14.44 14.5L15.85 15.92L19.39 12.38C19.59 12.18 19.9 12.18 20.1 12.38C20.3 12.58 20.3 12.89 20.1 13.09L14.1 19.1C11.56 21.64 7.45 21.64 4.91 19.1S2.37 12.45 4.91 9.91L8.44 6.37M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1Z" />
        </svg>
      </h1>
      <h3 className="home__subtitle">CS Student</h3>
      <p className="home__description">
        Hello, Im a full time computer science student at Texas A&M-Commerce.
        Welcome to my Portfolio. I am currently looking for an internship for
        Full-Stack Web Development.
      </p>

      <a href="#Contact" className="button button--flex">
        Say Hello
        <svg
          width="30"
          height="30"
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
      </a>
    </div>
  );
};

export default Data;

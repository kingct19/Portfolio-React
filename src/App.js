import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Porfolio from "./components/Portfolio/portfolio";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Porfolio />
        <Skills />
        <Qualification />
        <Contact />
      </main>
    </>
  );
};
export default App;

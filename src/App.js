import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
import "./components/Services/Services";
import Services from "./components/Services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
    </>
  );
};
export default App;

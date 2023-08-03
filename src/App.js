import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
};
export default App;

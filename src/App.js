import React from "react";
import './index.css';

import Divider from "./components/Divider"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Articles from "./components/Articles"
import Projects from "./components/Projects"

function App() {
  return (

    <div className="bg-black">
      <div className="bg-black text-white px-4 md:px-20 pb-16">
        <Navbar />
        <Header />
        <Divider />
        <Body />
        <Divider />
        <Projects />
        <Divider />
        <Articles />
        <Divider />
        <Contact />

      </div>
    </div>
  );
}

export default App;

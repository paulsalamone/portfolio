import "./index.css";
import { useState } from "react";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import WebDev from "./components/WebDev";
import Design from "./components/Design";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Footer from "./components/Footer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  return (
    <>
      <div className="App bg-gradient-to-b from-stone-600 to-stone-900 h-content scroll-smooth">
        <TopNav />
        <main>
          <Hero />
          <WebDev />

          <Design />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

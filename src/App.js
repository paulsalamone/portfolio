import "./index.css";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import WebDev from "./components/WebDev";
import Design from "./components/Design";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App  bg-gradient-to-b from-stone-600 to-stone-900 h-content">
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
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import DevSetup from "./components/DevSetup";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <main className="pt-16">
        <About />
        <Projects />
        <Skills />
        <Resources />
        <DevSetup />
      </main>
    </div>
  );
}

export default App;

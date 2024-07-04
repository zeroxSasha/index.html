import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

import { Route, useNavigation, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { width } = useWindowSize();

  return (
    <div className="App">
      <Header width={width} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

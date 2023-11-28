import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Award from "./pages/Award";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Award />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
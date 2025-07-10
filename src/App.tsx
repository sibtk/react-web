import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  About,
  RtocReporting,
  RealEstateRoi,
  SkuStrategyTracker,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState<string>(() => {
        const stored = localStorage.getItem('themeMode');
        return stored === 'light' ? 'light' : 'dark';
    });

    const handleModeChange = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode);
    };

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <Router>
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
          <Routes>
            <Route path="/" element={
              <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
              </FadeIn>
            } />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/rtoc-reporting" element={<RtocReporting />} />
            <Route path="/projects/real-estate-roi" element={<RealEstateRoi />} />
            <Route path="/projects/sku-strategy-tracker" element={<SkuStrategyTracker />} />
          </Routes>
          <Footer />
      </div>
    </Router>
    );
}

export default App;
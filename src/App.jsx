import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import BackgroundAnimation from "./components/BackGroundAnimation";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    font-family: 'Roboto Mono', 'NanumSquareNeo', monospace, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  color: white;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 767px) {
    overflow: visible;
  }
`;

const SectionsContainer = styled.div`
  background: linear-gradient(to bottom, #3a1c71, #d76d77, #f6c06b);
  height: 400vh;
  transition: transform 0.5s cubic-bezier(0.7, 0.04, 0.04, 1);
  background-attachment: scroll;
  overflow: hidden;

  /* @media (min-width: 768px) {
    overflow: visible;
  } */
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const FixedFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const sections = ["hero", "about", "projects", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionsContainerRef = useRef(null);
  const scrollingRef = useRef(false);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    scrollToSection(0);
  }, []);

  const scrollToSection = (index) => {
    if (scrollingRef.current) return;
    scrollingRef.current = true;
    setIsTransitioning(true);
    setActiveSection(index);
    if (sectionsContainerRef.current) {
      sectionsContainerRef.current.style.transform = `translateY(-${
        index * 100
      }vh)`;
    }
    setTimeout(() => {
      scrollingRef.current = false;
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 500) return;
      lastScrollTime.current = now;

      if (scrollingRef.current) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(
        0,
        Math.min(sections.length - 1, activeSection + direction)
      );
      if (newSection !== activeSection) {
        e.preventDefault();
        scrollToSection(newSection);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection]);

  return (
    <AppContainer>
      <GlobalStyle />
      <FixedHeader>
        <Header
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />
      </FixedHeader>
      <SectionsContainer ref={sectionsContainerRef}>
        {sections.map((section, index) => (
          <Section
            key={section}
            isActive={index === activeSection}
            isTransitioning={isTransitioning}
          >
            {index === 0 && <Hero />}
            {index === 1 && <About />}
            {index === 2 && <Projects />}
            {index === 3 && <Contact />}
          </Section>
        ))}
      </SectionsContainer>
      <FixedFooter>
        <Footer />
      </FixedFooter>
    </AppContainer>
  );
}

export default App;

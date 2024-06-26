import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { animateScroll as scroll, Events } from "react-scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', 'NanumSquareNeoBold', monospace, sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
`;

const SectionsContainer = styled.div`
  margin-top: 40px;
  overflow-y: hidden;
`;

const FixedFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  max-height: 60px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom, #3a1c71, #d76d77, #eaccb8);
  color: white;
`;

const Section = styled.section`
  height: 100vh;
  width: auto;

  transition: opacity 0.5s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const sections = ["hero", "about", "projects", "contact"];

function App() {
  console.log(` 


  _ _ _ _____ __    _____ _____ _____ _____ 
  | | | |   __|  |  |     |     |     |   __|
  | | | |   __|  |__|   --|  |  | | | |   __|
  |_____|_____|_____|_____|_____|_|_|_|_____|
  
  
  ,`);

  const [activeSection, setActiveSection] = useState(0);
  const scrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const sectionsContainerRef = useRef(null);

  const scrollToSection = (index) => {
    if (scrollingRef.current) return;
    scrollingRef.current = true;
    setActiveSection(index);

    if (sectionsContainerRef.current) {
      sectionsContainerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      scrollingRef.current = false;
    }, 1000);
  };
  useEffect(() => {
    let scrolling = false;
    const handleWheel = (e) => {
      e.preventDefault();
      if (scrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(
        0,
        Math.min(sections.length - 1, activeSection + direction)
      );
      scrollToSection(newSection);
    };

    window.addEventListener("wheel", handleWheel);

    Events.scrollEvent.register("end", () => {
      scrolling = false;
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      Events.scrollEvent.remove("end");
    };
  }, [activeSection]);

  useEffect(() => {
    scroll.scrollTo(activeSection * window.innerHeight, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  }, [activeSection]);

  return (
    <AppContainer>
      {/* <BackgroundAnimation /> */}
      <GlobalStyle />
      <FixedHeader>
        <Header
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />
      </FixedHeader>

      <SectionsContainer>
        <Section active={activeSection === 0}>
          <Hero />
        </Section>
        <Section active={activeSection === 1}>
          <About />
        </Section>
        <Section active={activeSection === 2}>
          <Projects />
        </Section>
        <Section active={activeSection === 3}>
          <Contact />
        </Section>
      </SectionsContainer>
      <FixedFooter>
        <Footer />
      </FixedFooter>
    </AppContainer>
  );
}

export default App;

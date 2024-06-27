import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import LineGraph from "./LineGraph";

const AboutSection = styled(animated.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  overflow-y: auto !important;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 350px; */
  width: 50%;
  color: black;
  font-family: "Roboto Mono", "NanumSquareNeoBold", monospace, sans-serif;

  @media (min-width: 768px) {
    padding-left: 0px;
  }
  /* border: 1px solid black; */
`;

const AboutGridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 50%;
`;

const AboutCard = styled.div`
  justify-self: center;
  width: 120px;
  height: 120px;
  border: 2px solid blue;
`;

function About() {
  // const fadeIn = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   config: { duration: 1000 },
  // });

  return (
    <>
      <AboutSection
        // style={fadeIn}
        id="about"
      >
        <h2>About Me</h2>
        <AboutGridContainer>
          <AboutCard></AboutCard>
          <AboutCard></AboutCard>
          <AboutCard></AboutCard>
        </AboutGridContainer>
        <ChartContainer>
          <LineGraph />
        </ChartContainer>
      </AboutSection>
    </>
  );
}

export default About;

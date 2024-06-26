import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import LineGraph from "./LineGraph";

const AboutSection = styled(animated.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 80%;
  margin: 20px auto;
  overflow-y: auto !important;
`;

const ChartContainer = styled.div`
  padding-top: 20px;
  margin-left: 0px;
  width: 80%;
  margin: 20px auto;
  color: black;
  font-family: "Roboto Mono", "NanumSquareNeoBold", monospace, sans-serif;
`;

const AboutGridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 50%;

  border: 2px solid yellow;
`;

const AboutCard = styled.div`
  justify-self: center;
  width: 120px;
  height: 120px;
  border: 2px solid blue;
`;

function About() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <AboutSection style={fadeIn} id="about">
      <h2>About Me</h2>
      <AboutGridContainer>
        <AboutCard></AboutCard>
        <AboutCard></AboutCard>
        <AboutCard></AboutCard>
        <AboutCard></AboutCard>
        <AboutCard></AboutCard>
        <AboutCard></AboutCard>
      </AboutGridContainer>
      <ChartContainer>
        <LineGraph />
      </ChartContainer>
    </AboutSection>
  );
}

export default About;

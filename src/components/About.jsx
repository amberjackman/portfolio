import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import LineGraph from "./LineGraph";

const AboutSection = styled(animated.section)`
  font-size: 1.5rem;
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
  /* font-family: "Roboto Mono", "NanumSquareNeoBold", monospace, sans-serif; */

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 130%;
    overflow-x: hidden;
  }
  /* border: 1px solid black; */
`;

const AboutGridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 0.3fr);
  width: 100%;
  height: 50%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 0.3fr);
  }
`;

const AboutCard = styled.div`
  justify-self: center;
  width: 120px;
  height: 120px;
  /* border: 2px solid blue; */
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
          <AboutCard>
            Name <br />
            성열홍
          </AboutCard>
          <AboutCard>
            Address <br /> 서울 구로
          </AboutCard>
          <AboutCard>
            Birth
            <br /> 95.04
          </AboutCard>
        </AboutGridContainer>
        <ChartContainer>
          <LineGraph />
        </ChartContainer>
      </AboutSection>
    </>
  );
}

export default About;

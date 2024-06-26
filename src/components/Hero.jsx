import React from "react";
import styled, { keyframes } from "styled-components";
import BackgroundAnimation from "./BackGroundAnimation";

const HeroSection = styled.section`
  width: 100vh;
  position: relative;
  color: #fff;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Hero() {
  return (
    <>
      {" "}
      <BackgroundAnimation />
      <HeroSection>
        <h1>Welcome to My Portfolio</h1>
        <p>프론트엔드 개발자 성열홍 포트폴리오 입니다.</p>
      </HeroSection>
    </>
  );
}

export default Hero;

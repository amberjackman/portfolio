import React from "react";
import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
  0% {
    transform: translateY(30vh);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0.9;
  }
`;

const FloatingDot = styled.div`
  position: absolute;
  top: ${(props) => props.startTop || "100%"};
  left: ${(props) => props.startLeft || "50%"};
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "white"};
  animation: ${moveUp} ${(props) => props.duration || "30s"} linear infinite;
  z-index: -1;
`;

const BackgroundAnimationContainer = styled.div`
  position: absolute;
  top: 0;
  margin-left: -700px;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  pointer-events: none;
  background: transparent;
`;

const BackgroundAnimation = () => {
  const createFloatingDot = () => {
    return ".";
  };

  return (
    <BackgroundAnimationContainer>
      {[...Array(100)].map((_, index) => (
        <FloatingDot
          key={index}
          size={`${Math.floor(Math.random() * 5) + 4}px`}
          color={`rgba(255, 255, 255, ${Math.random() * 1 + 1})`}
          startTop={`${Math.random() * 80}vh`}
          startLeft={`${Math.random() * 100}vw`}
          duration={`${Math.random() * 100 + 5}s`}
        >
          {createFloatingDot()}
        </FloatingDot>
      ))}
    </BackgroundAnimationContainer>
  );
};

export default BackgroundAnimation;

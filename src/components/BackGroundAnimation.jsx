import React from "react";
import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
  0% {
    transform: translateY(00vh);
  }
  100% {
    transform: translateY(-100vh);
  }
`;

const FloatingText = styled.div`
  font-family: "Roboto Mono", "NanumSquareNeoBold", monospace, sans-serif;
  position: absolute;
  display: inline-block;
  top: ${(props) => props.startTop || "100%"};
  left: ${(props) => props.startLeft || "50%"};
  animation: ${moveUp} 30s linear infinite;
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "black"};
  opacity: 0.3;
  z-index: 9999;
`;

const BackgroundAnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000%;
  overflow: hidden;
  pointer-events: none;
  background: transparent;
`;

const BackgroundAnimation = () => {
  const createFloatingText = () => {
    const keywords = [
      "const",
      "let",
      "var",
      "function",
      "callback",
      "promise",
      "async",
      "await",
      "json",
      "array",
      "object",
      "GET",
    ];
    const index = Math.floor(Math.random() * keywords.length);
    return keywords[index];
  };

  return (
    <BackgroundAnimationContainer>
      {[...Array(100)].map((_, index) => (
        <FloatingText
          key={index}
          fontSize={`${Math.floor(Math.random() * 24) + 12}px`}
          color={`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`}
          startTop={`${Math.random() * 100}%`}
          startLeft={`${Math.random() * 100}%`}
        >
          {createFloatingText()}
        </FloatingText>
      ))}
    </BackgroundAnimationContainer>
  );
};

export default BackgroundAnimation;

import React from "react";
import { Chrono } from "react-chrono";

const LineGraph = () => {
  const items = [
    {
      title: "2014",
      cardTitle: " ",
      cardSubtitle: "동양미래대학교 반도체전자공학과 (휴학)",
    },
    {
      title: "2023",
      cardTitle: " ",
      cardSubtitle: "코드스테이츠 프론트엔드 과정 수료",
    },
    {
      title: "2024",
      cardTitle: " ",
      cardSubtitle: "동대문 청년사관학교 세일즈포스 과정 수료",
    },
  ];

  return (
    <Chrono
      className="Chrono"
      cardWidth="280"
      items={items}
      disableToolbar
      borderLessCards
      textDensity="LOW"
      mode="VERTICAL"
      theme={{
        primary: "black",
        secondary: "black",
        cardBgColor: "transparent",
        titleColor: "white",
        titleColorActive: "white",
      }}
    />
  );
};

export default LineGraph;

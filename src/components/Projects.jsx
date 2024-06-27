import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSection = styled(animated.section)`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: horizontal;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 30%;
  height: 500px;
  background: #f4f4f4;
  border: 1px solid #ddd;
  margin: 1rem;
  padding: 1rem;
  transition: transform 0.3s;
  color: #333 !important;

  > a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    transition: transform 1s ease-in-out;
  }

  /* &:hover {
    transform: scale(1.05);
    cursor: pointer;
  } */
  > div {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80%;
    /* border: 1px solid red; */
    /* border-radius: 10px; */
  }
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
`;

function Projects() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.9 },
    config: { duration: 1000 },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    variableWidth: false,
    arrows: true,
  };

  return (
    <>
      <ProjectsSection style={fadeIn} id="projects">
        <h2>Projects</h2>
        <CardContainer>
          <ProjectCard>
            <a
              href="https://footchu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FOOTCHU
            </a>
            <Slider {...settings}>
              <div>
                <InnerCard>
                  <img src="/images/footchu_logo.png" alt="footchu logo" />
                </InnerCard>
                축구화를 추천해주는 SPA 입니다.
                <br />
                <br /> 가죽, 무게, 너비 같은 다양한 옵션을 선택할 수 있고
                사용자의 취향을 입력 받아 해당 사항에 맞는 축구화를 데이터에
                존재하는 축구화와 비교,계산하여 추천해줍니다.
                <br />
                <br />
                구글 서치콘솔, 네이버 서치어드바이저, vercel analystic 을 통해
                사용자의 통계를 확인 중 입니다.
              </div>
              <div>TITLEPHOTO 2</div>
            </Slider>
          </ProjectCard>
          <ProjectCard>
            AM I NOISY
            <Slider {...settings}>
              <div>TITLEPHOTO 1</div>
              <div>TITLEPHOTO 2</div>
            </Slider>
          </ProjectCard>{" "}
          <ProjectCard>
            PORTFOLIO
            <Slider {...settings}>
              <InnerCard>
                <img src="/images/portfolio_logo.png" alt="portfolio logo" />
              </InnerCard>
              <div>TITLEPHOTO 1</div>
              <div>TITLEPHOTO 2</div>
            </Slider>
          </ProjectCard>
        </CardContainer>
      </ProjectsSection>
    </>
  );
}

export default Projects;

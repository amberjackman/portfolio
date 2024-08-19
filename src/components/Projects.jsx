import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSection = styled(animated.section)`
  font-size: 0.9rem;
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

  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: start;
    overflow: scroll;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40vh;
  height: 500px;
  background: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  margin: 1rem;
  padding: 1rem;
  transition: transform 0.3s;
  color: white !important;
  @media (max-width: 768px) {
    min-width: 70%;
    min-height: 100%;
  }
  > a {
    margin-top: -3rem;
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
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80%;
    /* overflow-y: auto; */
    /* border: 1px solid red; */
    /* border-radius: 10px; */
  }
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;

  > img {
    max-width: 60%;
    max-height: 20%;
    margin-bottom: 1rem;
    border-radius: 10px;
    object-fit: contain;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > a > img {
    max-width: 60%;
    max-height: 20%;
    margin-bottom: 1rem;
    border-radius: 10px;
    object-fit: contain;
  }
  /* border: 1px solid red; */
`;

const CustomIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;

  img {
    position: relative;
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-in-out;
    margin: 10px;

    &:hover {
      transform: scale(1.1);
    }

    &:hover + div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AltText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 25%;
  width: 100%;
  max-width: 100%;
  height: 50%;
  transform: translateY(50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  white-space: normal;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: none;
  z-index: 20;
  word-wrap: break-word;
`;

const IconContainer = styled.div`
  position: relative;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 50%;
`;

function Projects() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.9 },
    config: { duration: 1000 },
  });

  const settings = {
    dots: true,
    infinite: false,
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
              Footchu
            </a>
            <Slider {...settings}>
              <div>
                <InnerCard>
                  <a
                    href="https://footchu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/footchu_logo.png" alt="aminoisy logo" />
                  </a>
                </InnerCard>
                축구화 추천, 리뷰 사이트 입니다
                <br /> <br /> 사용자의 취향을 입력 받아 해당 사항에 맞는
                축구화를 데이터에 존재하는 축구화와 비교,계산하여 추천해줍니다.
                <br />
                <br />
                구글 서치콘솔, 네이버 서치어드바이저, vercel analystic 을 통해
                사용자의 통계를 확인 중 입니다.
                <br />
                <br />
                반응형 디자인을 통해 모바일 디바이스의 사용성도 고려하였습니다.
              </div>

              <div>
                <InnerCard>
                  <IconContainer>
                    <CustomIcon>
                      <img src="/images/svg/HTML.svg" alt="HTML" />
                      <AltText>HTML</AltText>
                      <img src="/images/svg/CSS.svg" alt="CSS" />
                      <AltText>CSS</AltText>
                      <img src="/images/svg/JavaScript.svg" alt="JavaScript" />
                      <AltText>
                        정적데이터 만을 보여주기에 JavaScript를 사용했습니다
                      </AltText>
                    </CustomIcon>
                    <CustomIcon>
                      <img src="/images/svg/React.svg" alt="React" />
                      <AltText>
                        편리한 컴포넌트 방식 개발을 위해 react를 사용하였습니다
                      </AltText>
                      <img src="/images/svg/Vite-Light.svg" alt="Vite" />
                      <AltText>빠른 빌드를 위해 Vite를 사용하였습니다</AltText>
                      <img src="/images/svg/Bootstrap.svg" alt="Bootstrap" />
                      <AltText>
                        기본적인 CSS와 함께 Bootstrap을 혼용하여 사용했습니다
                      </AltText>
                    </CustomIcon>
                    <CustomIcon>
                      <img src="/images/svg/Vercel-Light.svg" alt="Vercel" />
                      <AltText>
                        빠른 테스트, 배포와 Analystic을 사용하기 위해 Vercel을
                        사용하였습니다
                      </AltText>
                      <img src="/images/svg/Supabase-Dark.svg" alt="Vercel" />
                      <AltText>
                        축구화와 리뷰, 회원 데이터베이스를 위해 Supabase를
                        사용하였습니다
                      </AltText>
                      <img src="/images/svg/Redux.svg" alt="Vercel" />
                      <AltText>
                        각 컴포넌트들 간 복잡한 상태관리를 위해 Redux를
                        사용하였습니다
                      </AltText>
                    </CustomIcon>
                  </IconContainer>
                </InnerCard>
              </div>

              <div>
                <LinkContainer>
                  <CustomIcon>
                    <a
                      href="https://economic-balaur-b87.notion.site/FOOTCHU-d5e2465dc1344f86b0ccf91778a73565"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/svg/notion.svg" alt="github" />
                    </a>
                  </CustomIcon>
                  <CustomIcon>
                    <a
                      href="https://github.com/amberjackman/footchu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/github.png" alt="github" />
                    </a>
                  </CustomIcon>
                </LinkContainer>
              </div>
            </Slider>
          </ProjectCard>
          <ProjectCard>
            <a
              href="https://footchu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <Slider {...settings}>
              <div>
                <InnerCard>
                  <a
                    href="https://seongyeolhongportfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/portfolio_logo.png" alt="aminoisy logo" />
                  </a>
                </InnerCard>
                보고 계신 현재 사이트 입니다. <br /> <br /> 스크롤 경험을 통해
                밤하늘에서 내려오는 것 같은 사용감과 <br /> <br /> 페이지 전체가
                하나의 PPT와 같은 느낌을 주려고 노력했습니다.
                <br />
                <br />
                반응형 디자인을 통해 모바일 디바이스의 사용성도 고려하였습니다.
              </div>
              <div>
                <InnerCard>
                  <IconContainer>
                    <CustomIcon>
                      <img src="/images/svg/HTML.svg" alt="HTML" />
                      <AltText>HTML</AltText>
                      <img src="/images/svg/CSS.svg" alt="CSS" />
                      <AltText>CSS</AltText>
                      <img src="/images/svg/JavaScript.svg" alt="JavaScript" />
                      <AltText>
                        정적데이터 만을 보여주기에 JavaScript를 사용했습니다
                      </AltText>
                    </CustomIcon>
                    <CustomIcon>
                      <img src="/images/svg/React.svg" alt="React" />
                      <AltText>
                        제일 익숙하고 자신 있는 React를 사용하였습니다.
                      </AltText>
                      <img src="/images/svg/Webpack-Light.svg" alt="Webpack" />
                      <AltText>
                        빠른 초기 설정과 추후 안정성을 위해 Webpack을
                        사용하였습니다
                      </AltText>
                      <img
                        src="/images/svg/StyledComponents.svg"
                        alt="Styled Component"
                      />
                      <AltText>
                        유연하고 동적인 스타일과 그에 따른 관리의 유용성을 얻기
                        위해 Styled Components를 사용하였습니다
                      </AltText>
                    </CustomIcon>
                    <CustomIcon>
                      <img src="/images/svg/Vercel-Light.svg" alt="Vercel" />
                      <AltText>
                        빠른 테스트와 배포 관리를 위해 Vercel을 사용했습니다
                      </AltText>
                    </CustomIcon>
                  </IconContainer>
                </InnerCard>
              </div>
              <div>
                <LinkContainer>
                  <CustomIcon>
                    <a
                      href="https://economic-balaur-b87.notion.site/913285f64bb940c5befa8be3ea329e2e"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/svg/notion.svg" alt="github" />
                    </a>
                  </CustomIcon>
                  <CustomIcon>
                    <a
                      href="https://github.com/amberjackman/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/github.png" alt="github" />
                    </a>
                  </CustomIcon>
                </LinkContainer>
              </div>
            </Slider>
          </ProjectCard>
          <ProjectCard>
            <a
              href="https://aminoisy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Am I Noisy?
            </a>
            <Slider {...settings}>
              <div>
                <InnerCard>
                  <a
                    href="https://aminoisy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/aminoisy_logo.png" alt="aminoisy logo" />
                  </a>
                </InnerCard>
                유저의 아이디와 태그를 입력받아 RIOT API를 사용, 최근 게임에서
                보낸 신호의 종류와 횟수를 받아와 사용한 평균 횟수를 사용자에게
                보여줍니다 <br />
                <br />
                반응형 디자인을 통해 모바일 디바이스의 사용성도 고려하였습니다.
              </div>
              <div>
                <InnerCard>
                  <IconContainer>
                    <CustomIcon>
                      <img src="/images/svg/HTML.svg" alt="HTML" />
                      <AltText>HTML</AltText>
                      <img src="/images/svg/CSS.svg" alt="CSS" />
                      <AltText>CSS</AltText>
                      <img src="/images/svg/TypeScript.svg" alt="TypeScript" />
                      <AltText>
                        많은 데이터가 전달되고, 그에 따른 관리를 위해
                        TypeScript를 사용하였습니다
                      </AltText>
                    </CustomIcon>
                    <CustomIcon>
                      <img src="/images/svg/NextJS-Light.svg" alt="React" />
                      <AltText>
                        Nextjs가 가진 API 라우팅의 이점을 얻기 위해
                        선택하였습니다.
                      </AltText>
                      <img src="/images/svg/Webpack-Light.svg" alt="Webpack" />
                      <AltText>
                        빠른 초기 설정과 추후 안정성을 위해 Webpack을
                        사용하였습니다
                      </AltText>
                      <img
                        src="/images/svg/TailwindCSS-Light.svg"
                        alt="TailWindCss"
                      />
                      <AltText>
                        직관적이고 간편한 Tailwind를 사용하였습니다.
                      </AltText>
                    </CustomIcon>
                    <CustomIcon>
                      <img src="/images/svg/Vercel-Light.svg" alt="Vercel" />
                      <AltText>
                        빠른 테스트와 배포 관리, 사용자 통계 관리를 위해
                        Vercel을 사용했습니다
                      </AltText>
                      <img src="/images/svg/Zustand.svg" alt="Zustand" />
                      <AltText>
                        상태관리를 위해 Zustand를 사용하였습니다. Redux보다
                        직관적이고 간편하여 해당 프로젝트에 알맞다고
                        판단하였습니다.
                      </AltText>
                    </CustomIcon>
                  </IconContainer>
                </InnerCard>
              </div>
              <div>
                <LinkContainer>
                  <CustomIcon>
                    <a
                      href="https://economic-balaur-b87.notion.site/Am-I-Noisy-API-9a1cc8965e984162ab028c6b30676885?pvs=74"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/svg/notion.svg" alt="github" />
                    </a>
                  </CustomIcon>
                  <CustomIcon>
                    <a
                      href="https://github.com/amberjackman/isthisright"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/github.png" alt="github" />
                    </a>
                  </CustomIcon>
                </LinkContainer>
              </div>
            </Slider>
          </ProjectCard>
        </CardContainer>
      </ProjectsSection>
    </>
  );
}

export default Projects;

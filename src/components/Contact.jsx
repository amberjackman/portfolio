import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactSection = styled(animated.section)`
  padding: 2rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 75%;

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

const IconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  margin: 1rem;
  /* border: 1px solid red; */
  @media (max-width: 768px) {
    margin: 0;
  }
  img {
    cursor: pointer;
    width: 50%;
    height: 50%;
  }
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

function Contact() {
  const [copied, setCopied] = useState(false);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <ContactSection style={fadeIn} id="contact">
      <ContactContainer>
        <h2>Contact</h2>
        <IconContainer>
          <CopyToClipboard text="01028954797" onCopy={handleCopy}>
            <IconBox>
              <img src="/images/telephone.png" alt="phone" />
              <Tooltip>
                {copied ? "01028954797 복사됨!" : "클릭 시 복사됩니다!"}
              </Tooltip>
            </IconBox>
          </CopyToClipboard>
          <CopyToClipboard text="feverhong@naver.com " onCopy={handleCopy}>
            <IconBox>
              <img src="/images/email.png" alt="email" />
              <Tooltip>
                {copied
                  ? "feverhong@naver.com 복사됨!"
                  : " 클릭 시 복사됩니다!"}
              </Tooltip>
            </IconBox>
          </CopyToClipboard>
          {/* <IconBox>
            <img src="/images/kakao-talk.png" alt="kakaotalk" />
            <Tooltip>클릭 시 연결됩니다!</Tooltip>
          </IconBox> */}
          <IconBox>
            <a
              href="https://github.com/amberjackman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github.png" alt="github" />
            </a>
            <Tooltip>클릭 시 이동합니다!</Tooltip>
          </IconBox>
        </IconContainer>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;

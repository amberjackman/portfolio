import React from "react";
import styled from "styled-components";
import { useSpring, animated, fadeIn } from "react-spring";

const ContactSection = styled(animated.section)`
  padding: 2rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

function Contact() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <ContactSection style={fadeIn} id="contact">
      <ContactContainer>
        <h2>Contact</h2>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;

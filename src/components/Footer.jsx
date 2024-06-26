import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 10px;
  height: 2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 My Portfolio</p>
    </FooterContainer>
  );
}

export default Footer;

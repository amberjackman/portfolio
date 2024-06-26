import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Nav = styled.nav`
  a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
function Header({ activeSection, onSectionChange }) {
  const sections = ["hero", "about", "projects", "contact"];
  const labels = ["Home", "About", "Projects", "Contact"];

  return (
    <HeaderContainer>
      <Nav>
        {sections.map((section, index) => (
          <a
            key={section}
            onClick={() => onSectionChange(index)}
            style={{ fontWeight: activeSection === index ? "bold" : "normal" }}
          >
            {labels[index]}
          </a>
        ))}
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

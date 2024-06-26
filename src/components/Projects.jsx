import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const ProjectsSection = styled(animated.section)`
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background: #f4f4f4;
  border: 1px solid #ddd;
  margin: 1rem;
  padding: 1rem;
  transition: transform 0.3s;
  color: #333 !important;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

function Projects() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.9 },
    config: { duration: 1000 },
  });

  return (
    <ProjectsSection style={fadeIn} id="projects">
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Project Title</h3>
        <p>Short description of the project.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project Title</h3>
        <p>Short description of the project.</p>
      </ProjectCard>
      {/* More project cards */}
    </ProjectsSection>
  );
}

export default Projects;

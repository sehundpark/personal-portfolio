import styled from "styled-components";
import { ProjectCard } from "../components/Card/ProjectCard";
import { projectsData } from "../components/Projects/ProjectsData";

export const Projects = () => {
  return (
    <StyledWorks>
      <StyledWorksHeader>Projects</StyledWorksHeader>
      <StyledWorksProjectGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            demo={project.demo}
          />
        ))}
      </StyledWorksProjectGrid>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const StyledWorksHeader = styled.h1`
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const StyledWorksProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, minmax(auto, 550px));
  }
`;

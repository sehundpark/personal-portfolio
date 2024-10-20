import styled from "styled-components";
import { Link } from "react-router-dom";
import { projectsData } from "./ProjectsData";
import { ProjectCard } from "../Card/ProjectCard";

export const ProjectShowcase = ({ limit = 3, useHomepageStyle = false }) => {
  const featuredProjects = projectsData.slice(0, limit);

  return (
    <ShowcaseContainer>
      <h2>Featured Projects</h2>
      <ProjectGrid $useHomepageStyle={useHomepageStyle}>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            demo={project.demo}
            isHomepage={useHomepageStyle}
          />
        ))}
      </ProjectGrid>
      <ViewMoreLink to="/projects">View All Projects</ViewMoreLink>
    </ShowcaseContainer>
  );
};

const ShowcaseContainer = styled.section`
  margin: 2rem 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${(props) =>
    props.$useHomepageStyle &&
    `
      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}
`;

const ViewMoreLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

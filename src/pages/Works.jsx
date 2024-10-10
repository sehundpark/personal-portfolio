import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";

export const Works = () => {
  const projects = [
    {
      image: "",
      title: "Battleship",
      description: "Test",
      link: "https://google.com",
    },
    {
      image: "",
      title: "",
      description: "",
      link: "",
    },
    {
      image: "",
      title: "",
      description: "",
      link: "",
    },
    //More as necessary
  ];
  return (
    <StyledWorks>
      <StyledWorksHeader>My Works</StyledWorksHeader>
      <StyledWorksProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </StyledWorksProjectGrid>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledWorksHeader = styled.h2`
  //
`;

const StyledWorksProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

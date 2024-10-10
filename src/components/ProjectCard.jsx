import styled from "styled-components";

export const ProjectCard = ({ image, title, description, link }) => {
  return (
    <StyledCard>
      <StyledCardTitle>{title}</StyledCardTitle>
      <img src={image} alt={title} />
      <StyledCardDescription>{description}</StyledCardDescription>
      <button>
        <a href={link}>View Project</a>
      </button>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  width: 42%;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  margin: 12px;
`;

const StyledCardTitle = styled.div`
  //
`;

const StyledCardDescription = styled.div`
  //
`;

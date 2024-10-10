import styled from "styled-components";

export const ProjectCard = ({ image, title, description, link, demo }) => {
  return (
    <StyledCard>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledImage src={image} alt={title} />
      <StyledCardDescription>{description}</StyledCardDescription>
      <StyledButtonContainer>
        <StyledButton>
          <StyledLink href={link} target="_blank" rel="noopener noreferrer">
            GitHub
          </StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </StyledLink>
        </StyledButton>
      </StyledButtonContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 12px;
  width: 45%;
  border: 2px solid black;
  border-radius: 10px;
`;

const StyledCardTitle = styled.h3`
  // Add your styles here
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledCardDescription = styled.p`
  // Add your styles here
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid black;
  width: fit-content;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default ProjectCard;

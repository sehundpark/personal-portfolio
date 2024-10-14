import styled from "styled-components";

export const ProjectCard = ({
  image,
  title,
  description,
  link,
  demo,
  isHomepage,
}) => {
  return (
    <StyledCard $isHomepage={isHomepage}>
      <ContentWrapper>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription>{description}</StyledCardDescription>
      </ContentWrapper>
      <ImageWrapper>
        <StyledImage src={image} alt={title} />
      </ImageWrapper>
      <StyledButtonContainer>
        <StyledButton
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </StyledButton>
        <StyledButton
          as="a"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </StyledButton>
      </StyledButtonContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  max-width: 550px;
  aspect-ratio: ${(props) => (props.$isHomepage ? "auto" : "7 / 8")};
  height: ${(props) => (props.$isHomepage ? "600px" : "auto")};
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  background-color: var(--card-background);
  color: var(--text-color);
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px var(--shadow-color);
  }
`;

const ContentWrapper = styled.div`
  &::-webkit-scrollbar-track {
    background: var(--background-color);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 3px;
  }
`;

const ImageWrapper = styled.div`
  height: 50%;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
`;

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const StyledCardTitle = styled.h3`
  margin-top: 0;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const StyledCardDescription = styled.p`
  font-size: 16px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 15px;
`;

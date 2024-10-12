import styled from "styled-components";

export const ProjectCard = ({ image, title, description, link, demo }) => {
  return (
    <StyledCard>
      <ContentWrapper>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription>{description}</StyledCardDescription>
      </ContentWrapper>
      <ImageWrapper>
        <StyledImage src={image} alt={title} />
      </ImageWrapper>
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
  border: 2px solid #000;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 550px;
  aspect-ratio: 7 / 8;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 16px;
`;

const ImageWrapper = styled.div`
  height: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid black;
  padding: 5px 10px;
  cursor: pointer;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

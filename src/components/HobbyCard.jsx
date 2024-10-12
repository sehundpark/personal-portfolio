import styled from "styled-components";

export const HobbyCard = ({ content, imageSlider }) => {
  return (
    <StyledCard>
      <ContentWrapper>{content}</ContentWrapper>
      <ImageSliderWrapper>{imageSlider}</ImageSliderWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid var(--primary-color);
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 450px;
  height: 625px;
  aspect-ratio: 450 / 625;
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;

  h4 {
    color: var(--secondary-color);
    margin-bottom: 10px;
  }

  p {
    color: var(--text-color);
    line-height: 1.6;
  }
`;

const ImageSliderWrapper = styled.div`
  height: 350px;
  background-color: var(--background-color);
  border-radius: 8px;
  overflow: hidden;
`;

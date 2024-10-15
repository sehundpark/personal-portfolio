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
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  max-width: 550px;
  height: auto;
  aspect-ratio: 7 / 8;
  display: flex;
  flex-direction: column;
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

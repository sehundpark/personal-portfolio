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
  border: 2px solid #000;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 450 / 625;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 16px;
`;

const ImageSliderWrapper = styled.div`
  height: 380px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

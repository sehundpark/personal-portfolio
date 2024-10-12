import { useState } from "react";
import styled from "styled-components";

export const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <StyledSlideshowContainer>
      <StyledImgContainer>
        <StyledImg
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </StyledImgContainer>
      <StyledButtonContainer>
        <StyledSlideshowNavigationButton onClick={goToPrevious}>
          Previous
        </StyledSlideshowNavigationButton>
        <StyledSlideshowNavigationButton onClick={goToNext}>
          Next
        </StyledSlideshowNavigationButton>
      </StyledButtonContainer>
      <StyledDotContainer>
        {images.map((_, index) => (
          <StyledDot key={index} active={index === currentIndex} />
        ))}
      </StyledDotContainer>
    </StyledSlideshowContainer>
  );
};

const StyledSlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImgContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
`;

const StyledSlideshowNavigationButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 2px 5px;
  font-size: 12px;
`;

const StyledDotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const StyledDot = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${(props) => (props.active ? "black" : "gray")};
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
`;

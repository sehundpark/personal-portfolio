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
      <div>
        {images.map((_, index) => (
          <span key={index}>{index === currentIndex ? "● " : "○ "}</span>
        ))}
      </div>
    </StyledSlideshowContainer>
  );
};

const StyledImg = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const StyledImgContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledSlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

const StyledSlideshowNavigationButton = styled.button`
  background-color: white;
  border: 2px solid black;
  margin: 10px;
`;

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
      <StyledControlsContainer>
        <StyledButtonContainer>
          <StyledSlideshowNavigationButton onClick={goToPrevious}>
            &lt;
          </StyledSlideshowNavigationButton>
          <StyledSlideshowNavigationButton onClick={goToNext}>
            &gt;
          </StyledSlideshowNavigationButton>
        </StyledButtonContainer>
        {/* <StyledDotContainer>
          {images.map((_, index) => (
            <StyledDot key={index} active={index === currentIndex} />
          ))}
        </StyledDotContainer> */}
      </StyledControlsContainer>
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
  height: 85%;
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

const StyledControlsContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

const StyledSlideshowNavigationButton = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

// const StyledDot = styled.span`
//   height: 8px;
//   width: 8px;
//   background-color: ${(props) =>
//     props.active ? "var(--primary-color)" : "var(--secondary-color)"};
//   border-radius: 50%;
//   display: inline-block;
//   margin: 0 4px;
//   transition: background-color 0.3s ease;
// `;

// const StyledDotContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

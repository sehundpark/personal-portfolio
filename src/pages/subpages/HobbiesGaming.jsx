import styled from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import { images } from "../../components/ImageImportBundles/HobbiesGamingImagesImport.jsx";

export const HobbiesGaming = () => {
  return (
    <StyledGaming>
      <StyledGamingHeader>Gaming</StyledGamingHeader>
      <StyledGamingParagraph>Gaming blah blah</StyledGamingParagraph>
      <ImageSlider images={images} />
    </StyledGaming>
  );
};

const StyledGaming = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: #c5995e;
`;

const StyledGamingHeader = styled.h4`
  margin: 0;
`;

const StyledGamingParagraph = styled.p``;

import styled from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import { images } from "../../components/ImageImportBundles/HobbiesPhotographyImagesImport.jsx";

export const HobbiesPhotography = () => {
  return (
    <StyledPhotography>
      <StyledPhotographyHeader>Photography</StyledPhotographyHeader>
      <StyledPhotographyParagraph>
        Photography blah blah
      </StyledPhotographyParagraph>
      <ImageSlider images={images} />
    </StyledPhotography>
  );
};

const StyledPhotography = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: #c5995e;
`;

const StyledPhotographyHeader = styled.h4`
  margin: 0;
`;

const StyledPhotographyParagraph = styled.p``;

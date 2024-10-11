import styled from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import { images } from "../../components/ImageImportBundles/HobbiesSportsImagesImport.jsx";

export const HobbiesSports = () => {
  return (
    <StyledSports>
      <StyledSportsHeader>Sports</StyledSportsHeader>
      <StyledSportsParagraph>Sports blah blah</StyledSportsParagraph>
      <ImageSlider images={images} />
    </StyledSports>
  );
};

const StyledSports = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: #c5995e;
`;

const StyledSportsHeader = styled.h4`
  margin: 0;
`;

const StyledSportsParagraph = styled.p``;

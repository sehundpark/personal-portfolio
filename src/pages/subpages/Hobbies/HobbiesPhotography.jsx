import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesPhotographyImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesPhotography = () => {
  const content = (
    <>
      <StyledPhotographyHeader>Photography</StyledPhotographyHeader>
      <StyledPhotographyParagraph>
        I took a few photography courses during my senior year of college at UC
        Davis and found it a great way to connect with my artistic side. I was
        able to capture many of these images during COVID-19 which turned out to
        be an excellent solo hobby. I was able to turn this into a side job
        where I've shot graduations, birthday parties, headshots, and more!
      </StyledPhotographyParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledPhotographyHeader = styled.h4`
  margin: 0;
`;

const StyledPhotographyParagraph = styled.p``;

import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesSportsImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesSports = () => {
  const content = (
    <>
      <StyledSportsHeader>Sports</StyledSportsHeader>
      <StyledSportsParagraph>
        I love to feel fit and stay active. My top favorite sports are
        volleyball, tennis, and soccer! I also love staying fit through swimming
        and yoga. Finding opportunities to stay active and fit are more
        difficult lately as time is limited and access to free and convenient
        sports facilities are rare in the city. However, I'm still always down
        to hit around.
      </StyledSportsParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledSportsHeader = styled.h4`
  margin: 0;
`;

const StyledSportsParagraph = styled.p``;

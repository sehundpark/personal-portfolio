import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesGamingImagesImport.jsx";
import { HobbyCard } from "../../../components/Card/HobbyCard.jsx";

export const HobbiesGaming = () => {
  const content = (
    <>
      <StyledGamingHeader>Gaming</StyledGamingHeader>
      <StyledGamingParagraph>
        Gaming is a link into my inner child and an easy activity to parktake in
        at home. It's an especially great method for hanging out with friends
        that live far away. While I don't play as much as I used to when I was
        younger, I sometimes still hop on when reconnecting with distant
        friends.
        <br />
        Notable games: Stardew Valley, Minecraft, Teamfight Tactics, League of
        Legends.
      </StyledGamingParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledGamingHeader = styled.h4`
  margin: 0;
`;

const StyledGamingParagraph = styled.p``;

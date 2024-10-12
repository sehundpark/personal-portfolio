import styled from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import { images } from "../../components/ImageImportBundles/HobbiesGamingImagesImport.jsx";
import { HobbyCard } from "../../components/HobbyCard";

export const HobbiesGaming = () => {
  const content = (
    <>
      <StyledGamingHeader>Gaming</StyledGamingHeader>
      <StyledGamingParagraph>
        Gaming is a form of escape into a world that is anything other than this
        current one. It allows for self-expression and the ability to view
        worlds through different eyes. I began Gaming in my sophmore year of
        high school with the Southwest Academy of Visual and Performing Arts and
        continued through to the end of college.
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

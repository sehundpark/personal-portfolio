import styled from "styled-components";
import { ImageSlider } from "../../../components/ImageSlider.jsx";
import { images } from "../../../components/ImageImportBundles/HobbiesActingImagesImport.jsx";
import { HobbyCard } from "../../../components/HobbyCard.jsx";

export const HobbiesActing = () => {
  const content = (
    <>
      <StyledActingHeader>Acting</StyledActingHeader>
      <StyledActingParagraph>
        Acting is a form of escape into a world that is anything other than this
        current one. It allows for self-expression and the ability to view
        worlds through different eyes. I began acting in my sophmore year of
        high school with the Southwest Academy of Visual and Performing Arts and
        continued through to the end of college.
      </StyledActingParagraph>
    </>
  );

  return (
    <HobbyCard
      content={content}
      imageSlider={<ImageSlider images={images} />}
    />
  );
};

const StyledActingHeader = styled.h4`
  margin: 0;
`;

const StyledActingParagraph = styled.p``;

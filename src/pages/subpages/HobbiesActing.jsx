import styled from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import { images } from "../../components/ImageImportBundles/HobbiesActingImagesImport.jsx";

export const HobbiesActing = () => {
  return (
    <StyledActing>
      <StyledActingHeader>Acting</StyledActingHeader>
      <StyledActingParagraph>
        Acting is a form of escape into a world that is anything other than this
        current one. It allows for self-expression and the ability to view
        worlds through different eyes. I began acting in my sophmore year of
        high school with the Southwest Academy of Visual and Performing Arts and
        continued through to the end of college.
      </StyledActingParagraph>
      <ImageSlider images={images} />
    </StyledActing>
  );
};

const StyledActing = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: tan;
`;

const StyledActingHeader = styled.h4`
  margin: 0;
`;

const StyledActingParagraph = styled.p``;

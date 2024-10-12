import styled from "styled-components";
import profileAvatar from "../assets/profile-avatar.png";

export const Home = () => {
  return (
    <StyledHomeContainer>
      <StyledHomeSectionOne>
        <StyledHomeBlurb>
          <StyledHeading>
            Hiya!
            <br />
            I'm Sehun.
            <br />A Front-End Developer.
          </StyledHeading>
          <StyledSubheading>Self-taught via The Odin Project.</StyledSubheading>
        </StyledHomeBlurb>
        <StyledProfileImgContainer>
          <StyledProfileImg src={profileAvatar} alt="image avatar of Sehun" />
        </StyledProfileImgContainer>
      </StyledHomeSectionOne>
    </StyledHomeContainer>
  );
};

const StyledHomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const StyledHomeSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 2px solid black;
  border-radius: 8px;
  padding: 2rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledHomeBlurb = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
    margin-bottom: 0;
  }
`;

const StyledHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const StyledSubheading = styled.p`
  font-size: 1.2rem;
`;

const StyledProfileImgContainer = styled.div`
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const StyledProfileImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 2px solid black;
`;

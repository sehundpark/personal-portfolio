import styled from "styled-components";
import profileAvatar from "../assets/profile-avatar.png";

export const Home = () => {
  return (
    <div className="home-page">
      <StyledHomeSectionOne>
        <StyledHomeBlurb>
          <h2>
            Hiya!
            <br />
            I'm Sehun.
            <br />
            Front-End Developer.
          </h2>
          <p>Learned via The Odin Project.</p>
        </StyledHomeBlurb>
        <StyledProfileImgContainer>
          <StyledProfileImg src={profileAvatar} alt="image avatar of Sehun" />
        </StyledProfileImgContainer>
      </StyledHomeSectionOne>
    </div>
  );
};

const StyledHomeSectionOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
`;

const StyledHomeBlurb = styled.div`
  display: flex;
  text-align: left;
  flex: 1;
  flex-direction: column;
  width: 50%;
  padding: 10px 20px;
`;

const StyledProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex: 1;
  width: 50%;
  padding: 10px 20px;
`;

const StyledProfileImg = styled.img`
  max-width: 75%;
  height: auto;
  border-radius: 50%;
  border: 2px solid black;
`;

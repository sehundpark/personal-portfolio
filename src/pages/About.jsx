import styled from "styled-components";
import { HobbiesActing } from "./subpages/HobbiesActing";
import { HobbiesPhotography } from "./subpages/HobbiesPhotography";
import { HobbiesGaming } from "./subpages/HobbiesGaming";
import { HobbiesSports } from "./subpages/HobbiesSports";

export const About = () => {
  return (
    <StyledAboutPage>
      <h2 className="home-page-title">About Me</h2>
      <div>
        <h3>Hobbies</h3>
        <HobbiesActing />
        <HobbiesPhotography />
        <HobbiesGaming />
        <HobbiesSports />
      </div>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
`;

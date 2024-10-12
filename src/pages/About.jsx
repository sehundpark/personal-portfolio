import styled from "styled-components";
import { HobbiesActing } from "./subpages/HobbiesActing";
import { HobbiesPhotography } from "./subpages/HobbiesPhotography";
import { HobbiesGaming } from "./subpages/HobbiesGaming";
import { HobbiesSports } from "./subpages/HobbiesSports";

const hobbies = [
  { name: "Acting", Component: HobbiesActing },
  { name: "Photography", Component: HobbiesPhotography },
  { name: "Gaming", Component: HobbiesGaming },
  { name: "Sports", Component: HobbiesSports },
];

export const About = () => {
  return (
    <StyledAboutPage>
      <h2>About Me</h2>
      <Studies>
        <h3>Education</h3>
        <p>afsdfa</p>
      </Studies>
      <Hobbies>
        <h3>My Hobbies</h3>
        <HobbiesGrid>
          {hobbies.map(({ name, Component }) => (
            <Component key={name} />
          ))}
        </HobbiesGrid>
      </Hobbies>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Studies = styled.div``;

const Hobbies = styled.div``;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 450px);
  gap: 50px;
  justify-content: center;
`;

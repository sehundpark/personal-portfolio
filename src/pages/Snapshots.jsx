import styled from "styled-components";
import { HobbiesActing } from "./subpages/Hobbies/HobbiesActing";
import { HobbiesPhotography } from "./subpages/Hobbies/HobbiesPhotography";
import { HobbiesGaming } from "./subpages/Hobbies/HobbiesGaming";
import { HobbiesSports } from "./subpages/Hobbies/HobbiesSports";

const hobbies = [
  { name: "Photography", Component: HobbiesPhotography },
  { name: "Acting", Component: HobbiesActing },
  { name: "Gaming", Component: HobbiesGaming },
  { name: "Sports", Component: HobbiesSports },
];

export const Snapshots = () => {
  return (
    <StyledAboutPage>
      <PageHeader>When I'm Not Coding</PageHeader>
      <HobbiesGrid>
        {hobbies.map(({ name, Component }) => (
          <Component key={name} />
        ))}
      </HobbiesGrid>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const PageHeader = styled.h1`
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, minmax(auto, 550px));
  }
`;

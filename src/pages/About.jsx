import { useEffect, useState } from "react";
import styled from "styled-components";
import { Resume } from "./subpages/Education/Resume";
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

export const About = () => {
  const [activeSection, setActiveSection] = useState("resume");

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["resume", "hobbies"];
      let current = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50) {
            current = section;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <StyledAboutPage>
      <NavBar>
        <NavItem
          onClick={() => scrollToSection("resume")}
          active={activeSection === "resume"}
        >
          Resume
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("hobbies")}
          active={activeSection === "hobbies"}
        >
          Hobbies
        </NavItem>
      </NavBar>

      <Section id="resume">
        <Resume />
      </Section>

      <Section id="hobbies">
        <Hobbies>
          <h3>My Hobbies</h3>
          <HobbiesGrid>
            {hobbies.map(({ name, Component }) => (
              <Component key={name} />
            ))}
          </HobbiesGrid>
        </Hobbies>
      </Section>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20px;
  top: 100px;
  background-color: var(--background-color);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px var(--shadow-color);
  z-index: 100;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) =>
    props.active ? "var(--secondary-color)" : "var(--primary-color)"};
  transition: color 0.3s ease;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  text-align: right;

  &:hover {
    color: var(--secondary-color);
  }
`;

const Hobbies = styled.div`
  margin-top: 50px;
  padding-top: 40px;
  border-top: 2px solid var(--border-color);
`;

const Section = styled.section`
  margin-bottom: 3rem;
  scroll-margin-top: 20px;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

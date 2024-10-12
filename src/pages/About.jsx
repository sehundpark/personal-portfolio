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

const NAVBAR_HEIGHT = 70; // Adjust this to match your Navbar height

export const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - NAVBAR_HEIGHT - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "resume", "hobbies"];
      let current = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= NAVBAR_HEIGHT + 50) {
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
          onClick={() => scrollToSection("about")}
          active={activeSection === "about"}
        >
          About Me
        </NavItem>
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

      <Section id="about">
        <h2>About Me</h2>
        <StyledAboutMeParagraph>
          Hello! My name is Sehun. I'm currently searching for work as a Junior
          Front-End Developer. I began to learn about web development with The
          Odin Project. I was previously working in marketing, but realized that
          my future prospects were simply not enough to sustain myself or my
          desire to one day have a family of my own. I retraced my life back to
          the very beginning to try and rediscover a potential career that could
          provide me with a stable financial career whilst being something
          enjoyable and attuned to my skillset. I was taken back to my memory of
          a game called Minecraft. It was early in my Junior High school years
          and I wanted to create an online community for my friends and I. Thus,
          I created DarkCrest MC Servers. It was, in a way, my first glimpse
          into the world of computer science and programming. I was running a
          Minecraft server on Linux and had to learn to navigate via command
          line. I was doing file transfers via FTP. I had learnt and setup MySQL
          databases to store world mapping data. I dabbled a little bit in Java
          to create simple plugins (mods) for the server. I had a lot of fun
          doing this and actually entered my first year of college with a major
          in Computer Science and Engineering. However, things didn't quite pan
          out that first year with due to a series of unfortunate events. I
          switched majors and pursued something else and had a lot of fun doing
          it. Half a decade later, I found myself coming back to learning how to
          code. Financial situations did not allow me to return the conventional
          route and so I sought out free opportunities and presevered through
          self-learning and growth. I'm happy to say that I finally feel that I
          am ready to break into this new field and venture towards this new
          journey in my life. My mission is to continue learning and growing in
          this world where creativity and tech intermingles, both seemingly
          opposite ends but somehow intertwined like myself.
        </StyledAboutMeParagraph>
      </Section>

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
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: sticky;
  top: ${NAVBAR_HEIGHT}px;
  background-color: var(--background-color);
  padding: 1rem 0;
  z-index: 90;
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

  &:hover {
    color: var(--secondary-color);
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  scroll-margin-top: ${NAVBAR_HEIGHT + 20}px;
`;

const StyledAboutMeParagraph = styled.p`
  padding-bottom: 50px;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
  text-align: center;
`;

const Hobbies = styled.div`
  margin-top: 50px;
  padding-top: 40px;
  border-top: 2px solid black;
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

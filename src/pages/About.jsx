import styled from "styled-components";
import { Resume } from "./subpages/Education/Resume";
import { HobbiesActing } from "./subpages/Hobbies/HobbiesActing";
import { HobbiesPhotography } from "./subpages/Hobbies/HobbiesPhotography";
import { HobbiesGaming } from "./subpages/Hobbies/HobbiesGaming";
import { HobbiesSports } from "./subpages/Hobbies/HobbiesSports";

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
      <p>
        Hello! My name is Sehun. I'm currently searching for work as a Junior
        Front-End Developer. I began to learn about web development with The
        Odin Project. I was previously working in marketing, but realized that
        my future prospects were simply not enough to sustain myself or my
        desire to one day have a family of my own. I retraced my life back to
        the very beginning to try and rediscover a potential career that could
        provide me with a stable financial career whilst being something
        enjoyable and attuned to my skillset. I was taken back to my memory of a
        game called Minecraft. It was early in my Junior High school years and I
        wanted to create an online community for my friends and I. Thus, I
        created DarkCrest MC Servers. It was, in a way, my first glimpse into
        the world of computer science and programming. I was running a Minecraft
        server on Linux and had to learn to navigate via command line. I was
        doing file transfers via FTP. I had learnt and setup MySQL databases to
        store world mapping data. I dabbled a little bit in Java to create
        simple plugins (mods) for the server. I had a lot of fun doing this and
        actually entered my first year of college with a major in Computer
        Science and Engineering. However, things didn't quite pan out that first
        year with due to a series of unfortunate events. I switched majors and
        pursued something else and had a lot of fun doing it. Half a decade
        later, I found myself coming back to learning how to code. Financial
        situations did not allow me to return the conventional route and so I
        sought out free opportunities and presevered through self-learning and
        growth. I'm happy to say that I finally feel that I am ready to break
        into this new field and venture towards this new journey in my life. My
        mission is to continue learning and growing in this world where
        creativity and tech intermingles, both seemingly opposite ends but
        somehow intertwined like myself.
      </p>
      <Resume />
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
`;

const Hobbies = styled.div``;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

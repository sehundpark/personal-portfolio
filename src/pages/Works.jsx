import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";
import BattleShipGIF from "../assets/works/battleship.gif";
import ShoppingCartGIF from "../assets/works/shoppingcart.gif";
import TaskPlannerGIF from "../assets/works/taskplanner.gif";
import PokemonMemoryCardPNG from "../assets/works/pokemonmemorycard.png";
import EtchASketchGIF from "../assets/works/etchsketch.gif";
import TicTacToeGIF from "../assets/works/tictactoe.gif";

export const Works = () => {
  const projects = [
    {
      image: BattleShipGIF,
      title: "Battleship",
      description:
        "Battleship is a classic naval combat strategy game implemented as a web application. Players can place their ships on a grid and engage in battle against an intelligent computer opponent. The game features interactive ship placement, turn-based gameplay, and a real-time game log.",
      link: "https://github.com/sehundpark/battleship",
      demo: "https://sehundpark.github.io/battleship/",
    },
    {
      image: ShoppingCartGIF,
      title: "Shopping Cart",
      description:
        "This project is a React-based shopping cart application that allows users to browse products, add them to a cart, and manage their shopping experience.",
      link: "https://github.com/sehundpark/shopping-cart",
      demo: "https://sehunshoppingcart.netlify.app/",
    },
    {
      image: TaskPlannerGIF,
      title: "Task Planner",
      description:
        "A comprehensive task management application built with JavaScript, allowing users to organize tasks into categories and projects.",
      link: "https://github.com/sehundpark/todo-list",
      demo: "https://sehundpark.github.io/todo-list/",
    },
    {
      image: PokemonMemoryCardPNG,
      title: "Pokemon Memory Game",
      description:
        "This project is a fun and interactive memory game featuring Pokemon characters. Players click on Pokemon cards to earn points, but must remember which ones they've clicked to avoid repeating and losing the game.",
      link: "https://github.com/sehundpark/pokemon-memory-game",
      demo: "https://pokemon-memory-game-sehundpark.netlify.app/",
    },
    {
      image: EtchASketchGIF,
      title: "Etch-A-Sketch",
      description:
        "An interactive web-based Etch-A-Sketch application that allows users to create colorful pixel art by hovering over a grid. This project is built using HTML, CSS, and JavaScript.",
      link: "https://github.com/sehundpark/etch-a-sketch",
      demo: "https://sehundpark.github.io/etch-a-sketch/",
    },
    {
      image: TicTacToeGIF,
      title: "Tic-Tac-Toe",
      description:
        "A classic Tic-Tac-Toe game implemented with HTML, CSS, and JavaScript. This project features a clean user interface, customizable player names and symbols, and a responsive design.",
      link: "https://github.com/sehundpark/tic-tac-toe",
      demo: "https://sehundpark.github.io/tic-tac-toe/",
    },
    //More as necessary
  ];

  return (
    <StyledWorks>
      <StyledWorksHeader>My Works</StyledWorksHeader>
      <StyledWorksProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            demo={project.demo}
          />
        ))}
      </StyledWorksProjectGrid>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

const StyledWorksHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledWorksProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, minmax(auto, 550px));
  }
`;

import styled from "styled-components";
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
      <Studies>
        <h3>Education</h3>
        <h4>Degree</h4>
        <p>
          University of California, Davis
          <br />
          Bachelor of Arts in Theatre and Dance
          <br />
          2017-2021
        </p>
        <h4>Computer Science Related Courses:</h4>
        <p>
          ECS 010: Intro to Programming
          <br />
          Course Description: Computers and computer programming for students
          with some prior experience, algorithm design, and debugging. Good
          programming style. Use of basic UNIX tools.
        </p>
        <p>
          ECS 030: Software Development & Object-Oriented Programming in C++
          <br />
          Course Description: Object-oriented programming in C++. Basic data
          structures and their use. Writing good programs of increased
          complexity and efficiency. Methods for debugging and verification.
        </p>
        <p>
          ECS 020: Discrete Math for Computer Science
          <br />
          Course Description: Discrete mathematics of particular utility to
          computer science. Proofs by induction. Propositional and first-order
          logic. Sets, functions, and relations. Big-O and related notations.
          Recursion and solutions of recurrence relations. Combinatorics.
          Probability on finite probability spaces. Graph theory.
        </p>
        <p>
          ECS 040: Data Structures, Algorithms, & Programming
          <br />
          Course Description: Design and analysis of data structures for a
          variety of applications; trees, heaps, searching, sorting, hashing,
          and graphs. Extensive programming.
        </p>
        <h4>Applicable Math Courses:</h4>
        <p>
          MAT 21A: Calculus
          <br />
          Course Description: Functions, limits, continuity. Slope and
          derivative. Differentiation of algebraic and transcendental functions.
          Applications to motion, natural growth, graphing, extrema of a
          function. Differentials. L'Hopital's rule.
        </p>
        <p>
          MAT 21B: Calculus
          <br />
          Course Description: Continuation of MAT 021A. Definition of definite
          integral, fundamental theorem of calculus, techniques of integration.
          Application to area, volume, arc length, average of a function,
          improper integral, surface of revolution.
        </p>
        <p>
          MAT 21C: Calculus
          <br />
          Course Description: Continuation of MAT 021B. Sequences, series, tests
          for convergence, Taylor expansions. Vector algebra, vector calculus,
          scalar and vector fields. Partial derivatives, total differentials.
          Applications to maximum and minimum problems in two or more variables.
          Applications to physical systems.
        </p>
        <p>
          MAT 22A: Linear Algebra
          <br />
          Course Description: Matrices and linear transformations, determinants,
          eigenvalues, eigenvectors, diagonalization, factorization.
        </p>
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
`;

const Studies = styled.div`
  margin-bottom: 2rem;
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

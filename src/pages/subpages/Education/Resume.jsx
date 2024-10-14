import styled from "styled-components";
import { Link } from "react-router-dom";

const educationData = [
  {
    type: "Degree",
    details: [
      "University of California, Davis",
      "Bachelor of Arts in Theatre and Dance",
      "September 2017- June 2021",
    ],
  },
  {
    type: "Coding Bootcamp",
    details: ["The Odin Project", "September 4, 2023 - Present"],
  },
];

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "styled-components"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Webpack",
      "npm",
      "Adobe Lightroom",
      "Adobe Photoshop",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Creativity",
      "Communication",
      "Adaptability",
      "Interpersonal Skills",
    ],
  },
];

const coursesData = [
  {
    type: "Computer Science",
    courses: [
      {
        name: "ECS 010: Intro to Programming",
        description:
          "Computers and computer programming for students with some prior experience, algorithm design, and debugging. Good programming style. Use of basic UNIX tools.",
      },
      {
        name: "ECS 030: Software Development & Object-Oriented Programming in C++",
        description:
          "Object-oriented programming in C++. Basic data structures and their use. Writing good programs of increased complexity and efficiency. Methods for debugging and verification.",
      },
      {
        name: "ECS 020: Discrete Math for Computer Science",
        description:
          "Discrete mathematics of particular utility to computer science. Proofs by induction. Propositional and first-order logic. Sets, functions, and relations. Big-O and related notations. Recursion and solutions of recurrence relations. Combinatorics. Probability on finite probability spaces. Graph theory.",
      },
      {
        name: "ECS 040: Data Structures, Algorithms, & Programming",
        description:
          "Design and analysis of data structures for a variety of applications; trees, heaps, searching, sorting, hashing, and graphs. Extensive programming.",
      },
    ],
  },
  {
    type: "Math",
    courses: [
      {
        name: "MAT 21A: Calculus",
        description:
          "Functions, limits, continuity. Slope and derivative. Differentiation of algebraic and transcendental functions. Applications to motion, natural growth, graphing, extrema of a function. Differentials. L'Hopital's rule.",
      },
      {
        name: "MAT 21B: Calculus",
        description:
          "Continuation of MAT 021A. Definition of definite integral, fundamental theorem of calculus, techniques of integration. Application to area, volume, arc length, average of a function, improper integral, surface of revolution.",
      },
      {
        name: "MAT 21C: Calculus",
        description:
          "Continuation of MAT 021B. Sequences, series, tests for convergence, Taylor expansions. Vector algebra, vector calculus, scalar and vector fields. Partial derivatives, total differentials. Applications to maximum and minimum problems in two or more variables. Applications to physical systems.",
      },
      {
        name: "MAT 22A: Linear Algebra",
        description:
          "Matrices and linear transformations, determinants, eigenvalues, eigenvectors, diagonalization, factorization.",
      },
    ],
  },
];

const featuredProjects = [
  {
    title: "Battleship",
    description:
      "A web-based implementation of the classic naval combat strategy game, featuring interactive ship placement and an intelligent computer opponent.",
    demo: "https://sehundpark.github.io/battleship/",
    link: "https://github.com/sehundpark/battleship",
  },
  {
    title: "Shopping Cart",
    description:
      "A React-based shopping cart application allowing users to browse products, add them to a cart, and manage their shopping experience.",
    demo: "https://sehunshoppingcart.netlify.app/",
    link: "https://github.com/sehundpark/shopping-cart",
  },
  {
    title: "Task Planner",
    description:
      "A comprehensive task management application built with JavaScript, enabling users to organize tasks into categories and projects.",
    demo: "https://sehundpark.github.io/todo-list/",
    link: "https://github.com/sehundpark/todo-list",
  },
];

export const Resume = () => {
  return (
    <StyledResume>
      <SocialLinks>
        <SocialLink
          to="https://www.linkedin.com/in/sehun-park-5b280b164"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          to="https://github.com/sehundpark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </SocialLink>
      </SocialLinks>

      <h1>Sehun Park</h1>
      <ContactInfo>
        <p>sehunpcodes@gmail.com | Los Angeles, CA</p>
      </ContactInfo>

      <Section>
        <h2>Professional Summary</h2>
        <p>
          Aspiring software developer with a strong foundation in web
          technologies and a passion for creating efficient, scalable
          applications. Skilled in JavaScript, React, HTML, and CSS, with a
          portfolio of diverse projects demonstrating problem-solving abilities
          and a keen eye for user experience.
        </p>
      </Section>

      <Section>
        <h2>Skills</h2>
        {skillsData.map((skillCategory, index) => (
          <SkillCategory key={index}>
            <h3>{skillCategory.category}</h3>
            <SkillList>
              {skillCategory.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </Section>

      <Section>
        <h2>Featured Projects</h2>
        {featuredProjects.map((project, index) => (
          <ProjectItem key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectLinks>
              <ProjectButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </ProjectButton>
              <ProjectButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </ProjectButton>
            </ProjectLinks>
          </ProjectItem>
        ))}
        <ViewMoreLink to="/works">View all projects</ViewMoreLink>
      </Section>

      <Section>
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <h3>{edu.type}</h3>
            {edu.details.map((detail, detailIndex) => (
              <p key={detailIndex}>{detail}</p>
            ))}
          </EducationItem>
        ))}
      </Section>

      <Section>
        <h2>Relevant Coursework</h2>
        {coursesData.map((courseType, index) => (
          <CourseCategory key={index}>
            <h3>{courseType.type}</h3>
            <CourseList>
              {courseType.courses.map((course, courseIndex) => (
                <CourseItem key={courseIndex}>
                  <CourseName>{course.name}</CourseName>
                  <CourseDescription>{course.description}</CourseDescription>
                </CourseItem>
              ))}
            </CourseList>
          </CourseCategory>
        ))}
      </Section>
    </StyledResume>
  );
};

const StyledResume = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  position: relative;
`;

const SocialLinks = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const SocialLink = styled(Link)`
  display: inline-block;
  width: 24px;
  height: 24px;
  color: var(--text-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: var(--secondary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const SkillItem = styled.li`
  background-color: var(--skill-bg);
  color: var(--skill-text);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
`;

const ProjectItem = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const ProjectButton = styled.a`
  background-color: var(--card-background);
  border: 2px solid var(--text-color);
  color: var(--text-color);
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-size: 14px;

  &:hover {
    background-color: var(--hover-bg);
  }
`;

const ViewMoreLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const EducationItem = styled.div`
  margin-bottom: 1rem;

  h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
`;

const CourseCategory = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CourseItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px var(--shadow-color);
  }
`;

const CourseName = styled.h4`
  margin: 0 0 0.5rem 0;
  color: var(--primary-color);
`;

const CourseDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-color);
`;

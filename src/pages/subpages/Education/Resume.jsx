import { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DownloadPDFButton } from "../../../components/DownloadPDFButton";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const contactInfo = [
  { icon: "📍", text: "Los Angeles, CA" },
  { icon: "📧", text: "sehunpcodes@gmail.com" },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/sehun-park-5b280b164",
  },
  { icon: <GitHubIcon />, link: "https://github.com/sehundpark" },
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
    skills: ["Git", "GitHub", "VS Code", "Webpack", "npm"],
  },
];

const featuredProjects = [
  {
    title: "Battleship",
    description:
      "Battleship is an interactive web project using JavaScript, HTML, and CSS. It employs object-oriented programming for game logic, features dynamic DOM manipulation, drag-and-drop ship placement, and AI targeting. The responsive UI uses flexbox and CSS Grid, with event-driven controls for game actions.",
    demo: "https://sehundpark.github.io/battleship/",
    link: "https://github.com/sehundpark/battleship",
  },
  {
    title: "Recipe Finder",
    description:
      "A full-stack TypeScript application leveraging React with custom hooks, context for state management, and styled-components for dynamic theming and responsive design. The application is powered by a Node.js/Express backend featuring RESTful API integration with request caching and custom middleware for API optimization.",
    demo: "https://sehunrecipefinder.netlify.app/",
    link: "https://github.com/sehundpark/recipe-finder",
  },
  {
    title: "Task Planner",
    description:
      "Task Planner is a web-based task management app built with vanilla JavaScript, HTML5, and CSS3. It features a hierarchical organization system, dynamic UI updates, and local storage integration. This project showcases proficiency in DOM manipulation, state management, and the ability to create complex web applications without frameworks.",
    demo: "https://sehundpark.github.io/todo-list/",
    link: "https://github.com/sehundpark/todo-list",
  },
];

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

export const Resume = () => {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const resumeRef = useRef();

  return (
    <ResumeContainer ref={resumeRef}>
      <DownloadButtonWrapper>
        <DownloadPDFButton contentRef={resumeRef} />
      </DownloadButtonWrapper>
      <Header>
        <Name>Sehun Park</Name>
        <ContactInfo>
          {contactInfo.map((item, index) => (
            <ContactItem key={index}>
              {item.link ? (
                <SocialLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </SocialLink>
              ) : (
                <>
                  <Icon>{item.icon}</Icon>
                  {item.text}
                </>
              )}
            </ContactItem>
          ))}
        </ContactInfo>
      </Header>

      {/* <Section title="Professional Summary">
        <Summary>
          Self-taught Front-End Developer with a passion for combining
          technology and creativity to create impactful, user-focused solutions.
          Diverse professional background spanning creative industries (acting,
          cooking, photography) and business roles (marketing, sales, customer
          service), providing a unique perspective and strong communication
          skills.
        </Summary>
      </Section> */}

      <Section title="Skills">
        <SkillsGrid>
          {skillsData.map((skillCategory, index) => (
            <SkillCategory key={index}>
              <SkillTitle>{skillCategory.category}</SkillTitle>
              <SkillList>
                {skillCategory.skills.map((skill, skillIndex) => (
                  <Skill key={skillIndex}>{skill}</Skill>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Section>

      <Section title="Featured Projects">
        <ProjectGrid>
          {featuredProjects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </ProjectLink>
                <ProjectLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectItem>
          ))}
        </ProjectGrid>
        <ViewMoreLink to="/projects">View all projects</ViewMoreLink>
      </Section>

      <Section title="Education">
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <Degree>{edu.type}</Degree>
            <EducationList>
              {edu.details.map((detail, detailIndex) => (
                <EducationListItem key={detailIndex}>
                  {detail}
                </EducationListItem>
              ))}
            </EducationList>
          </EducationItem>
        ))}
      </Section>

      <Section title="Relevant Coursework">
        <CoursesContainer>
          {coursesData.map((courseType, index) => (
            <CourseCategory key={index}>
              <CourseTitleRow>
                <CourseTitle>{courseType.type}</CourseTitle>
                {index === 0 && (
                  <ViewToggle>
                    <ToggleLabel>
                      <ToggleInput
                        type="checkbox"
                        checked={isDetailedView}
                        onChange={() => setIsDetailedView(!isDetailedView)}
                      />
                      <ToggleSlider />
                      <ToggleOption $left>Simple</ToggleOption>
                      <ToggleOption $right>Detailed</ToggleOption>
                    </ToggleLabel>
                  </ViewToggle>
                )}
              </CourseTitleRow>
              {isDetailedView ? (
                <DetailedCoursesView courses={courseType.courses} />
              ) : (
                <SimpleCoursesView courses={courseType.courses} />
              )}
            </CourseCategory>
          ))}
        </CoursesContainer>
      </Section>
    </ResumeContainer>
  );
};

const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
);

const SimpleCoursesView = ({ courses }) => (
  <SimpleList>
    {courses.map((course, courseIndex) => (
      <SimpleListItem key={courseIndex}>{course.name}</SimpleListItem>
    ))}
  </SimpleList>
);

const DetailedCoursesView = ({ courses }) => (
  <CourseList>
    {courses.map((course, courseIndex) => (
      <CourseItem key={courseIndex}>
        <CourseName>{course.name}</CourseName>
        <CourseDescription>{course.description}</CourseDescription>
      </CourseItem>
    ))}
  </CourseList>
);

const ResumeContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
`;

const DownloadButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const SectionWrapper = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--secondary-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

// const Summary = styled.p`
//   line-height: 1.6;
// `;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCategory = styled.div``;

const SkillTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Skill = styled.li`
  background-color: var(--card-background);
  padding: 0.3rem 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  display: inline-block;
  margin-right: 0.5rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  background-color: var(--primary-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  text-decoration: none;
  font-size: 0.8rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const ViewMoreLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const EducationList = styled.ul`
  padding-left: 20px;
`;

const EducationListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const EducationItem = styled.div`
  margin-bottom: 1rem;
`;

const Degree = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
`;

const CoursesContainer = styled.div`
  position: relative;
`;

const CourseCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CourseTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0;
`;

const ViewToggle = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 30px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--primary-color);
  }

  &:checked + span:before {
    transform: translateX(57px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-color);
  transition: 0.4s;
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 59px;
    left: 2px;
    bottom: 2px;
    background-color: var(--background-color);
    transition: 0.4s;
    border-radius: 13px;
  }
`;

const ToggleOption = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$left ? "left: 10px;" : "right: 10px;")}
  color: ${(props) => (props.$left ? "#3498db" : "white")};
  font-size: 12px;
  font-weight: bold;
  transition: 0.4s;

  ${ToggleInput}:checked ~ & {
    color: ${(props) => (props.$left ? "white" : "#3498db")};
  }
`;

const SimpleList = styled.ul`
  padding-left: 20px;
`;

const SimpleListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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

const CourseName = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: var(--primary-color);
`;

const CourseDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-color);
`;

const SocialLink = styled.a`
  color: var(--text-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

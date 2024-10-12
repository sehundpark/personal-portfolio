import styled from "styled-components";
import profileAvatar from "../assets/profile-avatar.png";
import { AnimatedIntro } from "../components/AnimatedIntro";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "Adobe Lightroom",
    "Adobe Photoshop",
  ];

  return (
    <StyledHomeContainer>
      <StyledHomeSectionOne>
        <StyledHomeBlurb>
          <AnimatedIntro />
        </StyledHomeBlurb>
        <StyledProfileImgContainer>
          <StyledProfileImg src={profileAvatar} alt="Profile avatar of Sehun" />
        </StyledProfileImgContainer>
      </StyledHomeSectionOne>

      <StyledSection>
        <h2>About Me</h2>
        <p>
          I'm a self-taught Front-End Developer with a passion for creating
          responsive and user-friendly web applications. With a background in
          marketing and a love for problem-solving, I bring a unique perspective
          to web development that focuses on both functionality and user
          experience.
        </p>
      </StyledSection>

      <ProjectShowcase limit={3} useHomepageStyle={true} />

      <SkillsSection skills={skills} />

      <StyledSection>
        <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities and collaborations. Whether you
          have a project in mind or just want to chat about web development,
          feel free to reach out!
        </p>
        <StyledButton as="a" href="/contact">
          Contact Me
        </StyledButton>
      </StyledSection>
    </StyledHomeContainer>
  );
};

const StyledHomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const StyledHomeSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledHomeBlurb = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
    width: 60%;
    margin-bottom: 0;
  }
`;

const StyledProfileImgContainer = styled.div`
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

const StyledProfileImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
`;

const StyledSection = styled.section`
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

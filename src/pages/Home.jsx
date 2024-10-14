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
    "Responsive Design",
    "Adobe Lightroom",
    "Adobe Photoshop",
  ];

  // const scrollToFooter = () => {
  //   const footer = document.querySelector("footer");
  //   if (footer) {
  //     footer.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
        <ConnectButtonsContainer>
          <ConnectButton
            href="https://www.linkedin.com/in/sehun-park-5b280b164"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            View LinkedIn Profile
          </ConnectButton>
          <ConnectButton
            href="https://github.com/sehundpark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            View GitHub Profile
          </ConnectButton>
          <ConnectButton href="mailto:sehunpcodes@gmail.com">
            <EmailIcon />
            Send me an Email
          </ConnectButton>
        </ConnectButtonsContainer>
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
  background-color: var(--card-background);
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

// const StyledButton = styled.button`
//   display: inline-block;
//   padding: 0.5rem 1rem;
//   background-color: var(--primary-color);
//   color: var(--text-color);
//   text-decoration: none;
//   border-radius: 4px;
//   border: none;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: var(--secondary-color);
//   }
// `;

const ConnectButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const ConnectButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: var(--text-color);
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }
`;

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

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

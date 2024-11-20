import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import { Link } from "react-router-dom";

export const AnimatedIntro = () => {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const options = {
      typeSpeed: 20,
      backSpeed: 0,
      showCursor: false,
    };

    const removeCursor = (self) => {
      if (self && self.cursor) {
        self.cursor.remove();
      }
    };

    const startNextTyped = (nextTyped) => {
      setTimeout(() => nextTyped.start(), 500);
    };

    const typed1 = new Typed(el1.current, {
      ...options,
      strings: ["Hi, my name's Sehun!"],
      onComplete: (self) => {
        removeCursor(self);
        startNextTyped(typed2);
      },
    });

    const typed2 = new Typed(el2.current, {
      ...options,
      strings: ["I'm a Full-Stack Web Developer."],
      onComplete: (self) => {
        removeCursor(self);
        setShowIcons(true);
      },
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <IntroContainer>
      <MainIntroText ref={el1} />
      <SubIntroText ref={el2} />
      {showIcons && (
        <SocialIcons>
          <SocialLink
            href="https://www.linkedin.com/in/sehun-park-5b280b164"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </SocialLink>
          <SocialLink
            href="https://github.com/sehundpark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="mailto:sehunpcodes@gmail.com">
            <EmailIcon />
          </SocialLink>
          <SocialLink as={Link} to="/resume">
            <ResumeIcon />
          </SocialLink>
        </SocialIcons>
      )}
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem 0;
`;

const MainIntroText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  min-height: 2.5rem;
  margin-bottom: 0.75rem;
`;

const SubIntroText = styled.div`
  font-size: 1.25rem;
  font-weight: normal;
  color: var(--text-color);
  min-height: 1.75rem;
  margin-bottom: 0.5rem;

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  a {
    color: var(--text-color);
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }

    svg {
      width: 24px;
      height: 24px;
    }
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

const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
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

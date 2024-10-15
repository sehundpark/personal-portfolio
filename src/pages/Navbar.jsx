import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../components/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <NavLinks>
          <StyledNavbarLI>
            <StyledLink to="/">Home</StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/works">Works</StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/snapshots">Snapshots</StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/resume">Resume</StyledLink>
          </StyledNavbarLI>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </ThemeToggle>
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

const StyledNavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--navbar-bg);
`;

const StyledNavbar = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const StyledNavbarLI = styled.li`
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-bg);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

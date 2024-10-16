import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../components/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <MenuToggle onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        <NavLinks $isOpen={isMenuOpen}>
          <StyledNavbarLI>
            <StyledLink to="/" onClick={toggleMenu}>
              Home
            </StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/projects" onClick={toggleMenu}>
              Projects
            </StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/snapshots" onClick={toggleMenu}>
              Snapshots
            </StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/resume" onClick={toggleMenu}>
              Resume
            </StyledLink>
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
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--navbar-bg);
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--navbar-bg);
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
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

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    height: 2px;
    width: 25px;
    background-color: var(--text-color);
    margin-bottom: 4px;
    border-radius: 5px;
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

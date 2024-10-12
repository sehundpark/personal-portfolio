import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <StyledNavbarUL>
          <StyledNavbarLI>
            <StyledLink to="/">Home</StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/works">Works</StyledLink>
          </StyledNavbarLI>
          <StyledNavbarLI>
            <StyledLink to="/about">About</StyledLink>
          </StyledNavbarLI>
        </StyledNavbarUL>
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

const StyledNavbarContainer = styled.div`
  width: 100%;
  background-color: var(--card-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const StyledNavbar = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const StyledNavbarUL = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style-type: none;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledNavbarLI = styled.li`
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  color: var(--secondary-color);
  font-weight: bold;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover,
  &.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
  }
`;

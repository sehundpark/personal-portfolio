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
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const StyledNavbar = styled.nav`
  width: 100%;
  max-width: 1200px;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 0.5rem;
`;

const StyledNavbarUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
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
  border: 2px solid #000;
  border-radius: 8px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

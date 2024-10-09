import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarUL>
        <StyledNavbarLI>
          <Link to="/">Home</Link>
        </StyledNavbarLI>
        <StyledNavbarLI>
          <Link to="/works">Works</Link>
        </StyledNavbarLI>
        <StyledNavbarLI>
          <Link to="/about">About</Link>
        </StyledNavbarLI>
      </StyledNavbarUL>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  border: 2px solid gray;
  border-radius: 5px;
  justify-content: center;
`;

const StyledNavbarUL = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 5px;
  margin: 0px 5px;
`;

const StyledNavbarLI = styled.li`
  display: flex;
  padding: 5px 10px;
  margin: 5px;
  border: 2px solid gray;
  border-radius: 5px;
`;

import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} Sehun Park. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: var(--background-color);
  font-size: 0.9rem;
`;

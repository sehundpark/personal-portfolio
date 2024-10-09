import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      {/* <img src="" alt="" /> */}
      <p>© Copyright 2024 Sehun Park</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
`;

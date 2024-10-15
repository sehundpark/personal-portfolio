import styled from "styled-components";
import { Resume } from "./subpages/Education/Resume";

export const ResumePage = () => {
  return (
    <StyledResumePage>
      <PageHeader>Resume</PageHeader>
      <ResumeWrapper>
        <Resume />
      </ResumeWrapper>
    </StyledResumePage>
  );
};

const StyledResumePage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const PageHeader = styled.h1`
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const ResumeWrapper = styled.div`
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

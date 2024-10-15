import { useRef } from "react";
import styled from "styled-components";
import { Resume } from "./subpages/Education/Resume";
import { DownloadPDFButton } from "../components/DownloadPDFButton";

export const ResumePage = () => {
  const resumeRef = useRef();

  return (
    <StyledResumePage>
      <PageHeader>Resume</PageHeader>
      <ButtonContainer>
        <DownloadPDFButton contentRef={resumeRef} />
      </ButtonContainer>
      <ResumeWrapper ref={resumeRef}>
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

import styled from "styled-components";

export const Resume = () => {
  return (
    <ResumeContainer>
      <PDFViewer src="/Sehun_Park_Resume.pdf" title="Sehun Park Resume" />
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 800px;
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

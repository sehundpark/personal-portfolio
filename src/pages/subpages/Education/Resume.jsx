import styled from "styled-components";
import { useState, useEffect } from "react";

export const Resume = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ResumeContainer>
      {/* <Controls $isMobile={isMobile}>
        <DownloadButton href="/Sehun_Park_Resume.pdf" download>
          Download PDF
        </DownloadButton>
        <ViewButton
          href="/Sehun_Park_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View in New Tab
        </ViewButton>
      </Controls> */}
      <PDFWrapper>
        <PDFViewer
          src="/Sehun_Park_Resume.pdf#view=FitH"
          title="Sehun Park Resume"
        />
      </PDFWrapper>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  width: 100%;
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 850px; // Standard resume width
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--card-background);
  border-bottom: 1px solid var(--border-color);
  justify-content: center;

  ${(props) =>
    props.$isMobile &&
    `
    padding: 0.75rem;
    gap: 0.5rem;
  `}
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
  text-align: center;
  min-width: 120px;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    min-width: 100px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const DownloadButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;

  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

const ViewButton = styled(Button)`
  background-color: var(--card-background);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const PDFWrapper = styled.div`
  width: 100%;
  aspect-ratio: 8.5 / 11; // Standard US Letter size ratio

  @media (max-width: 768px) {
    aspect-ratio: 0.77; // Slightly adjusted for mobile
  }
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

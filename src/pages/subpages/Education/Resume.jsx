import styled from "styled-components";
import { useState, useEffect } from "react";

export const Resume = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if the device is running iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
  }, []);

  return (
    <ResumeContainer>
      {isIOS && (
        <IOSControls>
          <ViewButton
            href="/Sehun_Park_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Safari
          </ViewButton>
        </IOSControls>
      )}
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
  max-width: 850px;
`;

const IOSControls = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: var(--card-background);
  border-bottom: 1px solid var(--border-color);
`;

const ViewButton = styled.a`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
  text-align: center;
  background-color: var(--primary-color);
  color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const PDFWrapper = styled.div`
  width: 100%;
  aspect-ratio: 8.5 / 11;

  @media (max-width: 768px) {
    aspect-ratio: 0.77;
  }
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

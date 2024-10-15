import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components";

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export const DownloadPDFButton = ({ contentRef }) => {
  const handleDownloadPDF = async () => {
    const element = contentRef.current;
    const canvas = await html2canvas(element, {
      scrollY: -window.scrollY,
      scale: 2,
      useCORS: true,
      logging: true,
      height: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("SehunPark_Resume.pdf");
  };

  return (
    <StyledButton onClick={handleDownloadPDF} title="Download PDF">
      <DownloadIcon />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.4rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

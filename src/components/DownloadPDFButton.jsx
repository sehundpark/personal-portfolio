import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components";

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

  return <StyledButton onClick={handleDownloadPDF}>Download PDF</StyledButton>;
};

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

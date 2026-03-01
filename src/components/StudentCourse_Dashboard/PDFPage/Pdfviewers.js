import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import pdfv from "../../../assests"

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        background: "#f3f4f6",
        padding: "10px",
        borderRadius: "8px",
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={index} pageNumber={index + 1} width={600} />
        ))}
      </Document>
    </div>
  );
}
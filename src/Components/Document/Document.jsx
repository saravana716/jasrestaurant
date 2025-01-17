import React, { useState } from "react";
import "./Document.css";

const Document = () => {
  const [count, setCount] = useState(1);
  const [documents, setDocuments] = useState([1]);
  const [page, setPage] = useState(0);
  const [activeDocument, setActiveDocument] = useState(0);

  const addApplication = () => {
    setCount(count + 1);
    setDocuments([...documents, 1]);
  };

  const addDocument = (appIndex) => {
    const updatedDocuments = [...documents];
    updatedDocuments[appIndex] = updatedDocuments[appIndex] + 1;
    setDocuments(updatedDocuments);
  };

  const selectApplication = (index) => {
    setPage(index);
    setActiveDocument(0);
  };

  const openDocumentFileInput = (docIndex) => {
    setActiveDocument(docIndex);
  };

  const handleBack = () => {
    if (activeDocument === 0) {
      if (page > 0) {
        setPage(page - 1);
        setActiveDocument(documents[page - 1] - 1);
      }
    } else {
      setActiveDocument(activeDocument - 1);
    }
  };

  const handleNext = () => {
    if (activeDocument === documents[page] - 1) {
      if (page < count - 1) {
        setPage(page + 1);
        setActiveDocument(0);
      }
    } else {
      setActiveDocument(activeDocument + 1);
    }
  };

  return (
    <>
      <div className="Documents">
        <div className="DocLeft">
          {[...Array(documents[page])].map((_, index) => (
            <div key={index}>
              <button
                className={`Doc ${activeDocument === index ? "active" : ""}`}
                onClick={() => openDocumentFileInput(index)}
              >
                Document {index + 1}
              </button>
            </div>
          ))}
          <button className="add" onClick={() => addDocument(page)}>
            Add Document
          </button>
        </div>

        <div className="DocRight">
          <div className="DocTop">
            {[...Array(count)].map((_, index) => (
              <button
                className={`Doc ${page === index ? "active" : ""}`}
                key={index}
                onClick={() => selectApplication(index)} // Clicking on an application will show its DocLeft
              >
                Application {index + 1}
              </button>
            ))}
            <button className="add" onClick={addApplication}>
              Add Application
            </button>
          </div>

          <div className="Docbottom">
            {activeDocument !== null && (
              <div className="files">
                <h1>
                  Application {page + 1} & Document {activeDocument + 1}
                </h1>
                <input type="file" />
              </div>
            )}
            <div className="Docbtn">
              <button className="back" onClick={handleBack}>
                Back
              </button>
              <button className="Next" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;

import React, { useState } from "react";
import "./Document.css";

const Document = () => {
  const [count, setCount] = useState(1);
  const [documents, setDocuments] = useState([[]]);
  const [page, setPage] = useState(0);
  const [activeDocument, setActiveDocument] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([[]]);

  const addApplication = () => {
    setCount(count + 1);
    setDocuments([...documents, []]);
    setUploadedFiles([...uploadedFiles, []]);
  };

  const addDocument = (appIndex) => {
    const updatedDocuments = [...documents];
    updatedDocuments[appIndex].push(null);
    setDocuments(updatedDocuments);

    const updatedUploadedFiles = [...uploadedFiles];
    updatedUploadedFiles[appIndex].push(null);
    setUploadedFiles(updatedUploadedFiles);
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
        setActiveDocument(documents[page - 1].length - 1);
      }
    } else {
      setActiveDocument(activeDocument - 1);
    }
  };

  const handleNext = () => {
    if (activeDocument === documents[page].length - 1) {
      if (page < count - 1) {
        setPage(page + 1);
        setActiveDocument(0);
      }
    } else {
      setActiveDocument(activeDocument + 1);
    }
  };

  const handleFileChange = (event, appIndex, docIndex) => {
    const file = event.target.files[0];
    if (file) {
      const updatedUploadedFiles = [...uploadedFiles];
      updatedUploadedFiles[appIndex][docIndex] = URL.createObjectURL(file);
      setUploadedFiles(updatedUploadedFiles);
    }
  };

  return (
    <div className="Documents">
      <div className="DocLeft">
        {page !== null &&
          documents[page].map((document, index) => (
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
          {Array.from({ length: count }).map((_, index) => (
            <button
              className={`Doc ${page === index ? "active" : ""}`}
              key={index}
              onClick={() => selectApplication(index)}
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
              <input
                type="file"
                onChange={(e) => handleFileChange(e, page, activeDocument)}
              />
              {uploadedFiles[page][activeDocument] && (
                <p>Uploaded File: {uploadedFiles[page][activeDocument].name}</p>
              )}
              {uploadedFiles[page][activeDocument] && (
                <img
                  src={uploadedFiles[page][activeDocument]}
                  alt={`Document ${activeDocument + 1}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              )}
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
  );
};

export default Document;

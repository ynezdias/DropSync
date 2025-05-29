import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("upload");
  const [documents, setDocuments] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newDoc = {
        name: selectedFile.name,
        url: URL.createObjectURL(selectedFile) // temporary view link
      };
      setDocuments([...documents, newDoc]);
      alert(`Uploaded: ${selectedFile.name}`);
      setSelectedFile(null);
    }
  };

  const handleViewUpload = () => {
    setView("upload");
    setSidebarOpen(false);
  };

  const handleViewDocuments = () => {
    setView("uploadedDocs");
    setSidebarOpen(false);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2></h2>
        <ul>
          <li onClick={handleViewUpload}>Upload Your Document</li>
          <li onClick={handleViewDocuments}>View Previously Uploaded Documents</li>
        </ul>
      </div>

      <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
        {view === "upload" ? (
          <>
            <h1>Upload Your Document</h1>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && (
              <div style={{ marginTop: "10px" }}>
                <p><strong>Selected:</strong> {selectedFile.name}</p>
                <button onClick={handleUpload}>Upload</button>
              </div>
            )}
          </>
        ) : (
          <>
            <h1>Previously Uploaded Documents</h1>
            {documents.length === 0 ? (
              <p>No documents uploaded yet.</p>
            ) : (
              <ul>
                {documents.map((doc, idx) => (
                  <li key={idx} style={{ marginBottom: "12px" }}>
                    <span>{doc.name}</span>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: "12px",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        backgroundColor: "#4a90e2",
                        color: "white",
                        textDecoration: "none"
                      }}
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}

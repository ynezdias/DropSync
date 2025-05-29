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

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        const fileUrl = `http://localhost:5000/uploads/${data.filename}`;
        setDocuments([...documents, { name: data.filename, url: fileUrl }]);
        alert("Uploaded successfully!");
        setSelectedFile(null);
      } else {
        alert("Upload failed: " + data.message);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading file.");
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

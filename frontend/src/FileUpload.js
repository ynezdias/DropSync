import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css'; // Import the CSS

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const res = await axios.post('http://127.0.0.1:5000/upload', formData);
      setMessage(res.data.message);
      setFile(null);
    } catch (err) {
      setMessage('File upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>📤 DropSync Uploader</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
        {message && <p className="upload-message">{message}</p>}
      </div>
    </div>
  );
};

export default FileUpload;

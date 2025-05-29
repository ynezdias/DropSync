// Sidebar.js
import React from "react";

export default function Sidebar({ onViewUploaded }) {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={onViewUploaded} style={{ cursor: "pointer" }}>
          Previously uploaded document
        </li>
         <li onClick={onViewUploaded} style={{ cursor: "pointer" }}>
          To Do List
        </li>

      </ul>
    </div>
  );
}

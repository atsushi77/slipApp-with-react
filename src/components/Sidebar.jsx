import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>伝票</h1>
        <button onClick={onAddNote}>+</button>
      </div>

      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div key={note.id} className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>🗑️</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modifiedDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;

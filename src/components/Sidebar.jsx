import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>伝票</h1>
        <button onClick={() => onAddNote()}>+</button>
      </div>

      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>

              {/* onAddNoteとは今回は引数を用いる為()が必要 それに伴い()=>も必要になる 何故なら引数を取る場合()=>が無いとページリロード時に毎回発火してしまうから */}
              {/* app.jsxで必要なidはここから渡している(note.id) */}
              <button onClick={() => onDeleteNote(note.id)}>🗑️</button>
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

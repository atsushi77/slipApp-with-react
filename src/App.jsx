import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "title",
      content: "content",
      modifiedDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
    // スプレッド構文...hoge,newHoge　今までの要素に(...hoge)新しく加える(newHoge)
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    // idに関しては呼び出し側で渡してここで受け取っている。
    setNotes(filterNotes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={activeNote} />
    </div>
  );
}

export default App;

import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNote] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "title",
      content: "content",
      modifiedDate: Date.now(),
    };
    setNote([...notes, newNote]);
    console.log(notes.id);
    // スプレッド構文...hoge,newHoge　今までの要素に(...hoge)新しく加える(newHoge)
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        // setNote={setNote}
      />
      <Main />
    </div>
  );
}

export default App;

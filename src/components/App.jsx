import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  const [noteList, setNoteList] = useState([]);
  function addNote(note) {
    setNoteList((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(noteId) {
    console.log(noteId);
    setNoteList((prevNotes) => {
      return prevNotes.filter((value, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
{
  /*key={note.key}*/
}
export default App;

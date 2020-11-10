import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevVals) => {
      return { ...prevVals, [name]: value };
    });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setNote((prevVals) => {
          return {
            title: "",
            content: "",
          };
        });
        return props.addNote(note);
      }}
    >
      <input
        onChange={handleChange}
        name="title"
        placeholder="Note title"
        value={note.title}
      ></input>
      <textarea
        onChange={handleChange}
        name="content"
        placeholder="Add a note"
        rows="3"
        value={note.content}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateArea;

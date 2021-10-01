import React, { useState } from 'react';

// Components
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';
import ImportantNotes from './components/ImportantNotes';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Creating new notes and showing them in all notes
  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Toogling notes between important and  all notes
  const toggleNote = (id) => {
    const new_notes = notes.slice();

    const index = new_notes.findIndex((note) => note.id === id);

    const note = new_notes[index];

    const new_note = {
      ...note,
      isImportant: !note.isImportant,
    };

    new_notes[index] = new_note;
    setNotes(new_notes);
  };

  console.log(notes);

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={createNote} />
      <hr />
      <ImportantNotes notes={notes} toggleNote={toggleNote} />
      <hr />
      <AllNotes notes={notes} toggleNote={toggleNote} />
    </div>
  );
};

export default App;

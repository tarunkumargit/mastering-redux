import React from 'react';

// Components
import Note from './Note';

const AllNotes = ({ notes, toggleNote }) => {
  return (
    <div className="my-3">
      <h5>All Notes</h5>
      <div className="row">
        {notes.map((note) => (
          <Note key={note.id} note={note} toggleNote={toggleNote} />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;

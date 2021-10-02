import React from 'react';
import { connect } from 'react-redux';
// Components
import Note from './Note';

const AllNotes = ({ toggleNote, notes }) => {
  return (
    <div className="my-3">
      <h5 className="text-center text-lg-start">All Notes</h5>
      <div className="row justify-content-center justify-content-md-start">
        {notes.map((note) => (
          <Note note={note} toggleNote={toggleNote} key={note.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes_reducer.notes,
});
export default connect(mapStateToProps)(AllNotes);

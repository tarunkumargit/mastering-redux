import React from 'react';
import { connect } from 'react-redux';
// Components
import Note from './Note';

const ImportantNotes = ({ notes }) => {
  return (
    <div className="importantNotes">
      <h5 className="text-center text-lg-start">Important Notes</h5>
      <div className="row justify-content-center justify-content-md-start">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} key={note.id} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(ImportantNotes);

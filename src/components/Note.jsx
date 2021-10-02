import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../redux/actions/notes.action';

const Note = ({ note: { date, note, id, isImportant }, toggleNote }) => {
  return (
    <div className="card m-2">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn m-2" onClick={() => toggleNote(id)}>
        {isImportant ? 'Remove from important' : 'Add to important'}
      </button>
    </div>
  );
};

export default connect(null, { toggleNote })(Note);

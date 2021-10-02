import React from 'react';
import { useSelector, useStore } from 'react-redux';
// Components
import Note from './Note';

const AllNotes = () => {
  const notes = useSelector((state) => state.notes_reducer.notes);

  const store = useStore();
  console.log(store.getState());

  return (
    <div className="my-3">
      <h5 className="text-center text-lg-start">All Notes</h5>
      <div className="row justify-content-center justify-content-md-start">
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   notes: state.notes_reducer.notes
// });
// export default connect(mapStateToProps)(AllNotes);

export default AllNotes;

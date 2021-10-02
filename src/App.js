import React, { useEffect } from 'react';

// Components
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';
import ImportantNotes from './components/ImportantNotes';
import { store } from './redux/store';
import { load_notes } from './redux/actions/notes.action';
import { connect } from 'react-redux';

const App = ({ loading }) => {
  useEffect(() => {
    store.dispatch(load_notes());
  }, []);

  return (
    <div className="container mt-3 p-3">
      <h1 style={{ textAlign: 'center' }}>Write Your Notes Here</h1>
      <CreateNote />
      <hr />
      {loading && (
        <div className="text-center">
          <div className="spinner-border my-3"></div>
        </div>
      )}
      <ImportantNotes />
      <hr />
      <AllNotes />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.notes_reducer.loading,
});

export default connect(mapStateToProps)(App);

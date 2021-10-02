import React from 'react';

// Components
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';
import ImportantNotes from './components/ImportantNotes';

const App = () => {
  return (
    <div className="container mt-3 p-3">
      <h1 style={{ textAlign: 'center' }}>Write Your Notes Here</h1>
      <CreateNote />
      <hr />
      <ImportantNotes />
      <hr />
      <AllNotes />
    </div>
  );
};

export default App;

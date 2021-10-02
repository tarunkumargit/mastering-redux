import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notes_reducer from './reducers/notes.reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(
  notes_reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

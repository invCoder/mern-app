import { createStore } from 'redux';
import noteReducer from './reducers/notes-reducer';

const store = createStore(noteReducer);

export default store;
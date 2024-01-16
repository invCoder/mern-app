// import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm';
import './components/NoteStyle.css';
import NotesTable from './components/NotesTable';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Quick Notes</h1>
      <div className="form-body">
      <NoteForm/>
      </div>
      <h2>Notes:</h2>
      <ul>
        <NotesTable/>
      </ul>
    </div>
  );
}

export default App;

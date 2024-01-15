// import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm';
import './components/NoteStyle.css';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Quick Notes</h1>
      <div className="form-body">
      <NoteForm/>
      </div>
    </div>
  );
}

export default App;

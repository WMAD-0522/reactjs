import './App.css';
import Editor from './components/Editor/Editor';
import Sidebar from './components/Sidebar/Sidebar';
import Split from "react-split";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([1])
  return (
    <main>
        {
          notes.length > 0 
          ?
          <Split
            sizes={[20, 80]}
            direction='horizontal'
            className='split'
          >
            <Sidebar />
            <Editor 
            // currentNote={} 
            // updateNote={} 
            />
          </Split>
          :
          <div className='empty-notes'>
            <h1>You have no notes</h1>
            <button>Create a new one</button>
          </div>
        }
    </main>
  );
}

export default App;

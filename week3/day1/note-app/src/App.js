import './App.css';
import Editor from './components/Editor/Editor';
import Sidebar from './components/Sidebar/Sidebar';
import Split from "react-split";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import {data} from "./assets/data/noteData"

function App() {

  /*
  /* Challenge: 4 Features.
  /* 1. + Sync notes with localStorage (save them into localStorage and read them from.)
  /* 2. + Add note summary titles 
  /* 3. + Move modified notes to the top of the list
  /* 4. + Delete note by id 
  */ 

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )

  useEffect(() => {
    console.log("Hello");
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  )

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here..."
    }
    setNotes(prev => [newNote, ...prev])
    setCurrentNoteId(newNote.id)
  }

  const findCurrentNote = () => {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  const deleteNote = (noteId) => {
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
  }

  const updateNote = (text) => {
    //create empty array
    // Loop over the original array
        //if the id matches
          // put the updated note at the begining of the array
        //else
          // put the old note to the end of the array
      //return the new array

    setNotes(oldNotes => {
      const newArray = [];

      for(let i = 0; i < oldNotes.length; i++){
          const oldNote = oldNotes[i];
          if(oldNote.id === currentNoteId){
            newArray.unshift({ ...oldNote, body: text});
          }else{
            newArray.push(oldNote);
          }
      }
      return newArray
    })
  }

  return (
    <main>
        {
          notes.length > 0 
          ?
          <Split
            sizes={[35, 65]}
            direction='horizontal'
            className='split'
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId && notes.length > 0 && 
              <Editor 
                currentNote={findCurrentNote()} 
                updateNote={updateNote} 
              />
            }
          </Split>
          :
          <div className='empty-notes'>
            <h1>You have no notes</h1>
            <button onClick={createNewNote}>Create a new one</button>
          </div>
        }
    </main>
  );
}

export default App;

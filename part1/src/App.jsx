import { useState, useEffect } from "react";

import Note from './components/Note'

import "./App.css";
import axios from 'axios'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }


  noteService
  .update(id, changedNote)
  .then(returnedNote => {
    setNotes(notes.map(note => note.id === id ? returnedNote : note))
  })
  .catch(error => {
    alert(
      `the note '${note.content}' was already deleted from server`
    )
    setNotes(notes.filter(n => n.id !== id))
  })
}

const addNote = (event) => {
event.preventDefault()
const noteObject = {
  content: newNote,
  important: Math.random() > 0.5
}

noteService
  .create(noteObject)
  .then(returnedNote => {
    setNotes(notes.concat(returnedNote))
    setNewNote('')
  })






  axios.put(url, changedNote).then(response => {
    setNotes(notes.map(n => n.id === id ? response.data : n))
  })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      // ...
    </div>
  )

}
export default App;





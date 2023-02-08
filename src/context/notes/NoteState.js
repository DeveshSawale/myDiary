import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
    const initialNotes = []
      const [notes, setNotes] = useState(initialNotes);



      // Fetch all notes 
      const fetchNotes = async() => {
        //API call 
        const response = await fetch(`${host}/api/notes/fetchnotes`,{
          method : 'GET',
          headers : {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYjRhNjE3Y2RkMjViZDE3OTRkYzQ2In0sImlhdCI6MTY3NTM0OTMzOH0.oq9MV6ixmMq2cprleCYqFokAgQxUbh0eeoiyV1jP0zc'
          },
        })
        const json = await response.json()
        setNotes(json)
      }



      // Add a note 
      const addNote = async(title,description) => {
        console.log("Adding a note")
        //API call 
        const response = await fetch(`${host}/api/notes/addnote`,{
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYjRhNjE3Y2RkMjViZDE3OTRkYzQ2In0sImlhdCI6MTY3NTM0OTMzOH0.oq9MV6ixmMq2cprleCYqFokAgQxUbh0eeoiyV1jP0zc'
          },
          body : JSON.stringify({title,description})
        })
        const note = await response.json();
        setNotes(notes.concat(note))
      }




      // Delete a note 
      const deleteNote = async(id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
          method : 'DELETE',
          headers : {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYjRhNjE3Y2RkMjViZDE3OTRkYzQ2In0sImlhdCI6MTY3NTM0OTMzOH0.oq9MV6ixmMq2cprleCYqFokAgQxUbh0eeoiyV1jP0zc'
          },
        })
        const json = await response.json()
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes)
      }



      // Edit a note 
      const editNote = async(id,title,description) => {
        //API call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method : 'PUT',
          headers : {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYjRhNjE3Y2RkMjViZDE3OTRkYzQ2In0sImlhdCI6MTY3NTM0OTMzOH0.oq9MV6ixmMq2cprleCYqFokAgQxUbh0eeoiyV1jP0zc'
          },
          body : JSON.stringify({title,description})
        })
        
        let newNotes = JSON.parse(JSON.stringify(notes));
        for(let i = 0; i < newNotes.length;i++){
          const element = notes[i]
          if(element._id === id ){
            newNotes[i].title = title;
            newNotes[i].description = description
            break;
          }
        }
        setNotes(newNotes)
        
      }


    return (
        <NoteContext.Provider value = {{notes,addNote,editNote,deleteNote, setNotes,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
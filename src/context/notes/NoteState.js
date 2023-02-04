import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
    const initialNotes = []
      const [notes, setNotes] = useState(initialNotes);

      // Fetch all notes 
      const fetchNotes = async(title,description) => {
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

        let note = {
          "_id": "63dbfd61d3ad5af63453565d",
          "user": "63db4a617cdd25bd1794dc46",
          "title": title,
          "description": description,
          "date": "2023-02-02T18:13:53.161Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }


      // Delete a note 
      const deleteNote = (id) => {
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes)
      }

      // Edit a note 
      const editNote = async(id,title,description) => {
        //API call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYjRhNjE3Y2RkMjViZDE3OTRkYzQ2In0sImlhdCI6MTY3NTM0OTMzOH0.oq9MV6ixmMq2cprleCYqFokAgQxUbh0eeoiyV1jP0zc'
          },
          body : JSON.stringify({title,description})
        })
        const res =  response.json();

        for(let i = 0; i < notes.length;i++){
          const element = notes[i]
          if(element._id === id ){
            element.title = title;
            element.description = description
          }
        }
        
      }
    return (
        <NoteContext.Provider value = {{notes,addNote,editNote,deleteNote, setNotes,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
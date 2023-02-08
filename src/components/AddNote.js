import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote} = context
    const [note, setNote] = useState({title : "", description : ""})

    const handleSubmit = (e) => {
        e.preventDefault(); // does not let the page to reload itself
        addNote(note.title, note.description)
        setNote({title : "", description : ""})
    }

    const OnChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <div className="container my-4">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" value={note.title} onChange={OnChange}  required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name = "description" value={note.description} onChange={OnChange} required minLength={5}/>
                </div>
                <button disabled = {note.title.length<5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
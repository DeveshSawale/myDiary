import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote} = context
    const [note, setNote] = useState({title : "", description : ""})

    const handleSubmit = (e) => {
        e.preventDefault(); // does not let the page to reload itself
        addNote(note.title, note.description)
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
                    <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" onChange={OnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name = "description" onChange={OnChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
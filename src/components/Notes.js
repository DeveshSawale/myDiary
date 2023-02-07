import { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Note from './Note';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes, editNote} = context
  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  const [note, setNote] = useState({id : "", etitle: "", edescription: "" })
  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id : currentNote._id, etitle: currentNote.title, edescription: currentNote.description })
  }
  
  const handleClick = (e) => {
    editNote(note.id,note.etitle,note.edescription  )
    refClose.current.click();

  }

  const OnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote />

      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* {modal content} */}
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">title</label>
                  <input type="text" className="form-control" value={note.etitle} id="etitle" name="etitle" aria-describedby="emailHelp" onChange={OnChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" value={note.edescription} id="edescription" name="edescription" onChange={OnChange} />
                </div>
              </form>
            </div>
            {/* modal content till here */}
            <div className="modal-footer">
              <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <h2>Your Notes </h2>
        {notes.map((note) => {
          return <Note key={note._id} note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  )
}

export default Notes
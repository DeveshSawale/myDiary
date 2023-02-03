import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Note from './Note';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context
  return (
    <div className="row my-5">
        <h2>Your Notes </h2>
        {notes.map((note) => {
            return <Note key={note._id} note ={note} />;
        })}
    </div>
  )
}

export default Notes
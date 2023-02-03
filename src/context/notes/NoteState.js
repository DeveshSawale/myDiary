import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
          "_id": "63dbf1276c52f4c7ba93f5be",
          "user": "63db4a617cdd25bd1794dc46",
          "title": "This is my title",
          "description": "And this is Description",
          "date": "2023-02-02T17:21:43.298Z",
          "__v": 0
        },
        {
          "_id": "63dbf16e6c52f4c7ba93f5c0",
          "user": "63db4a617cdd25bd1794dc46",
          "title": "Dusty Boy",
          "description": "Dustin is talented and intelligent",
          "date": "2023-02-02T17:22:54.429Z",
          "__v": 0
        },
        {
          "_id": "63dbfd3fd3ad5af63453565b",
          "user": "63db4a617cdd25bd1794dc46",
          "title": "Dusty Boy",
          "description": "Dustin is talented and intelligent",
          "date": "2023-02-02T18:13:19.915Z",
          "__v": 0
        },
        {
          "_id": "63dbfd61d3ad5af63453565d",
          "user": "63db4a617cdd25bd1794dc46",
          "title": "Dusty Boy",
          "description": "Dustin is talented and intelligent",
          "date": "2023-02-02T18:13:53.161Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(initialNotes);
    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
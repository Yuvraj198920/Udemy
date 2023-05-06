import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const { name, value } = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submiteNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    
    return (
        <div>
            <form className="create-note">
                <input 
                type="text"
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="title"
                />

                <textarea name="content" 
                rows="3"
                onChange={handleChange}
                value={note.content}
                placeholder="take a note...."
                 />

                 <Fab onClick={submiteNote}>
                    <AddIcon />
                 </Fab>
            </form>
        </div>
    )
}

export default CreateArea;
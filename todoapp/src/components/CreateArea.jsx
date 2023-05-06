import React, { useState } from "react";

function CreateArea() {
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
            </form>
        </div>
    )
}

export default CreateArea;
import { useEffect, useState } from "react"
import * as NotesService from "../NotesService"
import "./NoteForm.css"

export default function NoteForm({ note, setNote, updateList }){
    async function handleDeleteNote(){
        await NotesService.deleteNote({ id: note.id, title: note.title, content: note.content })
        updateList()
    }

    async function handleSaveNote(){
        await NotesService.saveNote({ id: note.id, title: note.title, content: note.content })
        updateList()
    }

    const [titleError, setTitleError] = useState('')

    useEffect(() => {
        if(!note.title){
            setTitleError("Please enter a title")
            return
        }

        setTitleError('')
    }, [note.title])

    return (
        <div className="note-form">
            <label>Title</label>
            <div className="form-error">{titleError}</div>
            <input value={note.title} onChange={(e) => setNote({...note, title: e.target.value })} />

            <label>Content</label>
            <textarea value={note.content} onChange={(e) => setNote({...note, content: e.target.value })} />

            <div className="note-form-buttons">
                <button onClick={handleDeleteNote} className="btn delete-btn">Delete</button>
                <button 
                    onClick={handleSaveNote} 
                    className={`btn save-btn ${titleError ? 'disabled-btn' : ''}`} 
                    disabled={titleError}> 
                    Save
                </button>
            </div>
        </div>
    )
}
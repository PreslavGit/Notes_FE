import { useEffect, useState } from "react"
import * as NotesService from "../NotesService"
import { Note } from "../Note.dto"
import NotesList from "./NotesList"
import NoteForm from "./NoteForm"
import './NotesManager.css'

export default function NotesManager() {
    const [notes, setNotes] = useState(null)
    const [shownNote, setShownNote] = useState(null)
    const [findById, setFindById] = useState(1)

    function displayNote(note) {
        setShownNote(note)
    }

    function getEmptyNote(){
        return new Note('', '')
    }

    function addNewNote(){
        setShownNote(getEmptyNote())
    }

    function updateList(){
        fetchNotes()
        setShownNote(null)
    }

    async function getNoteById(){
        try{
            const note = await NotesService.getById(findById)
            setShownNote(new Note(note.title, note.content))
        }catch(e){
            alert("Note not found")
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    function fetchNotes(){
        NotesService.getAll()
            .then(json => setNotes(json))
    }

    return (
        <div className="notes-manager">
            <div>
                <div>
                    <input type="number" placeholder="note id..." value={findById} onChange={(e) => setFindById(e.target.value)} />
                    <button onClick={() => getNoteById()} className="btn get-note-btn">Get note by id</button>
                </div>
                <button onClick={addNewNote} className="btn add-note-btn">+ Add new note</button>
                {notes ?
                    <NotesList notes={notes} displayNote={displayNote} /> :
                    <div>Loading notes...</div>
                }
            </div>
            {shownNote ?
                <NoteForm note={shownNote} setNote={setShownNote} updateList={updateList} /> :
                <></>
            }
        </div>
    )
}
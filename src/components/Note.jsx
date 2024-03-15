import "./Note.css"

export default function Note({ note, displayNote }){
    return (
        <div className="note-container" onClick={() => displayNote(note)}>
            <span>{note.id}</span>
            <span className="note-title">{note.title}</span>
            <span className="note-content">{note.content}</span>
        </div>
    )
}
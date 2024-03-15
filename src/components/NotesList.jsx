import Note from "./Note";

export default function NotesList({ notes, displayNote }) {
    return (
        <>
            {notes.length ?
                notes.map(n => {
                    return <Note note={n} displayNote={displayNote} key={n.id} />
                }) :
                <div>No notes found</div>
            }
        </>
    )
}
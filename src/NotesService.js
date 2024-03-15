const API_URL = 'http://localhost:3000'

export function getAll() {
    return fetch(API_URL + '/get/all').then(res => res.json())
}

export async function getById(id) {
    const res = await fetch(API_URL + '/get/' + id)
    const note = await res.json()

    return note
}

export function saveNote(note){
    if(note.id){
        return editNote(note)
    } else {
        return createNote(note)
    }
}

async function createNote(note){
    return fetchAPI('/create', "POST", JSON.stringify(note))
}

async function editNote(note){
    return fetchAPI('/edit/' + note.id, "PUT", JSON.stringify(note))
}

export async function deleteNote(note){
    return fetchAPI('/delete/' + note.id, "DELETE", JSON.stringify(note))
}

async function fetchAPI(route, method, body){
    return fetch(API_URL + route, {
        method: method,
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    })

}

import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesManager from './components/NotesManager.jsx'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesManager />
  </React.StrictMode>,
)

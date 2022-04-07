import React from 'react'
import * as FaIcons from "react-icons/fa"
import {useNotes} from "../../Hooks/Index"

const NotesCard = ({title, description, noteId, videoId}) => {
  
    const {deleteNote} = useNotes()

    const noteDeleteHandler = () => {
        deleteNote(noteId, videoId)
         
    }

    return (
        <div className="notes-card">
            <h2 className="text-sm notes-title">{title}</h2>
            <p className="grey-text text-sm">{description}</p>

            <div className="notes-card-footer">
                <FaIcons.FaTrash className="icons" onClick={() => noteDeleteHandler()} />
            </div>
        </div>
    )
}

export  {NotesCard}
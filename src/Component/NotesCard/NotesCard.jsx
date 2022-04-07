import React from 'react'

const NotesCard = ({title, description}) => {
  

    return (
        <div className="notes-card">
            <h2 className="text-sm notes-title">{title}</h2>
            <p className="grey-text text-sm">{description}</p>
        </div>
    )
}

export  {NotesCard}
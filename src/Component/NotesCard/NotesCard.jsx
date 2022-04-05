import React from 'react'
import * as FaIcons from "react-icons/fa";

const NotesCard = ({showEditNots, setShowEditOption}) => {

    const clickHandler = () => {
        setShowEditOption(!showEditNots)
    }

    return (
        <div className="notes-card">
            <h2 className="text-sm notes-title">Learn Unreal engine</h2>
            <p className="grey-text text-sm">Description: Learn Web 3.0 from zero. In this video, Madhavan (Founder, questbook), teaches Tanay how to write his first smart contract.</p>
            <div className="notes-card-footer">
                <FaIcons.FaEdit className="icons" onClick={() => clickHandler()} />
                <FaIcons.FaTrash className="icons" />
            </div>
        </div>
    )
}

export  {NotesCard}
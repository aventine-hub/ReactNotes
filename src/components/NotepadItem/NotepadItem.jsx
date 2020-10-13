import React from 'react';
// import { Link } from 'react-router-dom';
import './NotepadItem.css';


function NotepadItem(props) {
    return (
        <div className="flex">
            <div className="note">
                {props.user._id === props.note.userID && (<p>{props.note.textContent}</p>)}


                {props.user._id === props.note.userID && (<button
                    onClick={() => props.handleDeleteNote(props.note._id)}>
                    X
                </button>)}
            </div>
        </div>
    );
}


export default NotepadItem;
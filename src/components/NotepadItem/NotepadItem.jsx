import React from 'react';
// import { Link } from 'react-router-dom';
import './NotepadItem.css';


function NotepadItem(props) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <div className='panel-content'>{props.note.textContent}</div>
            </div>
            <button
                className="btn btn-xs btn-danger margin-left-10"
                onClick={() => props.handleDeleteNote(props.note._id)}
            >
                DELETE
            </button>
        </div>
    );
}


export default NotepadItem;
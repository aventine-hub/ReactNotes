import React from 'react';
// import { Link } from 'react-router-dom';
import './NotepadItem.css';


function NotepadItem(props) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <div className='panel-content'>{props.note.textContent}</div>
            </div>
        </div>
    );
}


export default NotepadItem;
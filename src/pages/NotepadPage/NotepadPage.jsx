import React from "react";
import "./NotepadPage.css";
import NotepadItem from "../../components/NotepadItem/NotepadItem";

function NotepadPage(props) {
    return (
        <>
            <h3>ReactNotes</h3>
            <div className="NotepadPage-grid">
                {props.notes.map(note => (
                    <NotepadItem note={note} key={note._id} handleDeleteNote={props.handleDeleteNote} />
                ))}
            </div>
        </>
    );
}


export default NotepadPage;
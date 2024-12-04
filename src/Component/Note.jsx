import React from 'react';

const Note = ({ note }) => {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.tagline}</p>
            <p>{note.body}</p>
        </div>
    );
};

export default Note;

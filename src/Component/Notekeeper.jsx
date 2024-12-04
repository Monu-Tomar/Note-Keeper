import React, { useState, useEffect } from 'react';
import { getNotes, addNote, updateNote, deleteNote } from '../Services/mockapi'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Notekeeper.css';

const Notekeeper = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', tagline: '', body: ''});
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const fetchedNotes = await getNotes();
            setNotes(fetchedNotes);
        } catch (error) {
            toast.error("Error loading notes.");
        }
    };

    const handleAddNote = async () => {
        try {
            await addNote(newNote);
            toast.success("Note added successfully!");
            setNewNote({ title: '', tagline: '', body: '',});
            fetchNotes(); 
            setIsModalOpen(false);
        } catch (error) {
            toast.error("Error adding note!");
        }
    };

    const handleUpdateNote = async () => {
        try {
            await updateNote(editingNoteId, newNote);
            toast.success("Note updated successfully!");
            setIsEditing(false);
            setEditingNoteId(null);
            setNewNote({ title: '', tagline: '', body: '', });
            fetchNotes();
            setIsModalOpen(false);
        } catch (error) {
            toast.error("Error updating note!");
        }
    };

    const handleDeleteNote = async (id) => {
        try {
            await deleteNote(id);
            toast.success("Note deleted successfully!");
            fetchNotes();
        } catch (error) {
            toast.error("Error deleting note!");
        }
    };

    const handleEditNote = (note) => {
        setNewNote(note);
        setIsEditing(true);
        setEditingNoteId(note.id);
        setIsModalOpen(true);
    };

    // const handlePinNote = (id) => {
    //     const noteToUpdate = notes.find(note => note.id === id);
    //     if (noteToUpdate) {
    //         noteToUpdate.pinned = !noteToUpdate.pinned;
    //         handleUpdateNote();
    //     }
    // };

    return (
        <div className="notekeeper">
            <h1>Note keeper</h1>
            <button onClick={() => { setIsEditing(false); setIsModalOpen(true); }}>Add Note</button>

            <div className="note-grid">
                {notes.map(note => (
                    <div key={note.id} className="note-card">
                        <h2>{note.title}</h2>
                        <h4>{note.tagline}</h4>
                        <p>{note.body}</p>
                        {/* <button onClick={() => handlePinNote(note.id)}>
                            {note.pinned ? 'Unpin' : 'Pin'}
                        </button> */}
                        <button onClick={() => handleEditNote(note)}>Edit</button>
                        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <h2>{isEditing ? 'Edit Note' : 'Add Note'}</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newNote.title}
                        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Tagline"
                        value={newNote.tagline}
                        onChange={(e) => setNewNote({ ...newNote, tagline: e.target.value })}
                    />
                    <textarea
                        placeholder="Body"
                        value={newNote.body}
                        onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
                    />
                    <button onClick={isEditing ? handleUpdateNote : handleAddNote}>
                        {isEditing ? 'Update Note' : 'Add Note'}
                    </button>
                    <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default Notekeeper;
// import React, { createContext, useState, useEffect } from 'react';

// export const NotesContext = createContext();

// const NotesProvider = ({ children }) => {
//     const [notes, setNotes] = useState([]);

//     useEffect(() => {
//         const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//         setNotes(storedNotes);
//     }, []);

//     const saveNotesToLocalStorage = (notes) => {
//         localStorage.setItem('notes', JSON.stringify(notes));
//     };

//     const addNote = (note) => {
//         const updatedNotes = [...notes, { ...note, id: Date.now() }];
//         setNotes(updatedNotes);
//         saveNotesToLocalStorage(updatedNotes);
//     };

//     const updateNote = (id, updatedNote) => {
//         const updatedNotes = notes.map(note => (note.id === id ? { ...note, ...updatedNote } : note));
//         setNotes(updatedNotes);
//         saveNotesToLocalStorage(updatedNotes);
//     };

//     const deleteNote = (id) => {
//         const updatedNotes = notes.filter(note => note.id !== id);
//         setNotes(updatedNotes);
//         saveNotesToLocalStorage(updatedNotes);
//     };

//     return (
//         <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
//             {children}
//         </NotesContext.Provider>
//     );
// };

// export default NotesProvider;

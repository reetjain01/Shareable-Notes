import React, { useState, useEffect } from 'react';
import TextEditor from './components/TextEditor';
import NoteList from './components/NoteList';
import Toolbar from './components/Toolbar';
import Navbar from './components/Navbar';
import CryptoJS from 'crypto-js';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  // Load notes from localStorage when the app loads
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  // Encrypt note content
  const encryptNote = (content, password) => {
    return CryptoJS.AES.encrypt(content, password).toString();
  };

  // Decrypt note content
  const decryptNote = (encryptedContent, password) => {
    const bytes = CryptoJS.AES.decrypt(encryptedContent, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  // Save note (new or edited)
  const saveNote = (content, title, password) => {
    if (activeNote) {
      const updatedNotes = notes.map((note) =>
        note.id === activeNote.id
          ? { ...note, content: encryptNote(content, password), title }
          : note
      );
      setNotes(updatedNotes);
    } else {
      const newNote = {
        id: Date.now(),
        content: encryptNote(content, password),
        title,
        createdAt: Date.now(), // Add createdAt timestamp
        pinned: false,
      };
      setNotes([newNote, ...notes]);
    }
    setActiveNote(null);
  };

  // Pin/Unpin a note
  const togglePinNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    );
    setNotes(updatedNotes);
  };

  // Delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Edit a note
  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    const password = prompt("Enter the password to decrypt the note:");
    if (password) {
      const decryptedContent = decryptNote(noteToEdit.content, password);
      setActiveNote({ ...noteToEdit, content: decryptedContent });
    }
  };

  // Sort notes (pinned notes first)
  const sortedNotes = [...notes].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main layout with text editor and note list */}
      <div className="flex flex-1">
        {/* Left panel: Toolbar */}
        <div className="flex flex-col p-4 bg-gray-200 border-r border-gray-300">
          <Toolbar />
        </div>

        {/* Center panel: Editor */}
        <div className="flex w-3/5 p-4">
          <TextEditor note={activeNote} saveNote={saveNote} />
        </div>

        {/* Right panel: Notes list */}
        <div className="w-2/5 p-4 bg-gray-100 overflow-y-auto border-l border-gray-300">
          <h2 className="text-lg font-bold mb-4">Notes List</h2>
          <NoteList
            notes={sortedNotes}
            onEdit={editNote}
            onDelete={deleteNote}
            onPin={togglePinNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useRef, useState } from "react";
import CryptoJS from 'crypto-js';

const TextEditor = ({ note, saveNote }) => {
  const [content, setContent] = useState(note ? note.content : "");
  const [title, setTitle] = useState(note ? note.title : "");
  const [password, setPassword] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    if (note) {
      setContent(note.content || "");
      setTitle(note.title || "");
      editorRef.current.innerText = note.content || "";
    } else {
      setContent("");
      setTitle("");
      editorRef.current.innerText = "";
    }
  }, [note]);

  const handleInput = (e) => {
    setContent(e.target.innerText);
  };

  const handleSave = () => {
    if (content.trim() !== "" && title.trim() !== "" && password) {
      // Call the saveNote function with the title, content, and password
      saveNote(content, title, password);
      editorRef.current.innerText = "";
      setContent("");
      setTitle("");
      setPassword("");
    } else {
      alert("Please fill all fields and enter a password.");
    }
  };

  return (
    <div className="flex-1 p-4 border rounded-lg bg-white shadow-lg">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border mb-2 p-2 w-full rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border mb-2 p-2 w-full rounded"
      />
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="h-64 p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all overflow-auto"
        suppressContentEditableWarning={true}
      />
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Save Note
      </button>
    </div>
  );
};

export default TextEditor;

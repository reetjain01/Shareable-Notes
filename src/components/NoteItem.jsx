import React from 'react';
import { FaEdit, FaTrashAlt, FaThumbtack } from 'react-icons/fa';

const NoteItem = ({ note, onEdit, onDelete, onPin }) => {
  return (
    <div className={`p-4 border rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105 ${note.pinned ? 'bg-yellow-100' : 'bg-white'}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold text-lg">{note.title || "Untitled"}</span>
          <span className="text-gray-600 text-sm">{note.content.substring(0, 50)}...</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onPin(note.id)} className={`hover:text-yellow-700 ${note.pinned ? 'text-yellow-600' : 'text-yellow-500'}`}>
            <FaThumbtack />
          </button>
          <button onClick={() => onEdit(note.id)} className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(note.id)} className="text-red-500 hover:text-red-700">
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="text-gray-500 text-xs mt-2">{new Date(note.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default NoteItem;

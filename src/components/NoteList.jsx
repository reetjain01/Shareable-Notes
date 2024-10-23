import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onEdit, onDelete, onPin }) => {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onPin={onPin}
        />
      ))}
    </div>
  );
};

export default NoteList;

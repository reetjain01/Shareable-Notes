import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

const Toolbar = () => {
  const applyCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="flex flex-col bg-gray-300 rounded shadow-lg h-full w-16 p-2">
      <button onClick={() => applyCommand('bold')} className="flex items-center justify-center mb-6 hover:bg-gray-400 rounded p-1">
        <FaBold className="text-lg" />
      </button>
      <button onClick={() => applyCommand('italic')} className="flex items-center justify-center mb-6 hover:bg-gray-400 rounded p-1">
        <FaItalic className="text-lg" />
      </button>
      <button onClick={() => applyCommand('underline')} className="flex items-center justify-center mb-6 hover:bg-gray-400 rounded p-1">
        <FaUnderline className="text-lg" />
      </button>
      <button onClick={() => applyCommand('justifyLeft')} className="flex items-center justify-center mb-6 hover:bg-gray-400 rounded p-1">
        <FaAlignLeft className="text-lg" />
      </button>
      <button onClick={() => applyCommand('justifyCenter')} className="flex items-center justify-center mb-6 hover:bg-gray-400 rounded p-1">
        <FaAlignCenter className="text-lg" />
      </button>
      <button onClick={() => applyCommand('justifyRight')} className="flex items-center justify-center mb-6 hover:bg-gray-400 rounded p-1">
        <FaAlignRight className="text-lg" />
      </button>
      <select onChange={(e) => applyCommand('fontSize', e.target.value)} className="border px-2 py-1 rounded mt-4 w-full">
        <option value="1">S</option>
        <option value="3">M</option>
        <option value="5">L</option>
      </select>
    </div>
  );
};

export default Toolbar;

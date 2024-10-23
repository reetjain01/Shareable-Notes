# Shareable Notes

**Shareable Notes** is a React-based web application that allows users to create, edit, pin, and delete notes. The application provides an intuitive text editor with toolbar options for text formatting and keeps track of pinned notes, displaying them at the top of the list.

## Features

- **Create Notes**: Users can create new notes with a title and content.
- **Edit Notes**: Existing notes can be edited.
- **Pin/Unpin Notes**: Pinned notes appear at the top of the list and have a distinct background color.
- **Delete Notes**: Users can delete notes they no longer need.
- **Auto Save**: Notes are saved to `localStorage` to persist between sessions.
- **Text Formatting**: Basic text formatting options such as bold, italic, and underline are available.
- **End-to-End Encryption**: Users can securely password-protect individual notes using CryptoJS.
- **Responsive Design**: The layout adjusts to different screen sizes.

## Technologies Used

- **React**: Frontend framework used to build the application.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **React Icons**: Icon library used for action buttons (Edit, Delete, Pin).
- **LocalStorage**: Used to store the notes locally on the user's browser.

## Installation and Setup

To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/shareable-notes.git
   cd shareable-notes
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## File Structure

```
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── NoteItem.jsx
│   │   ├── NoteList.jsx
│   │   ├── TextEditor.jsx
│   │   └── Toolbar.jsx
│   └── App.jsx
├── README.md
├── package.json
└── tailwind.config.js
```

## How to Use

1. **Creating Notes**: 
   - Enter a title and content in the editor and click the "Save Note" button.
   - The note will be saved and displayed in the notes list on the right.

2. **Editing Notes**: 
   - Click the edit button (pencil icon) next to any note in the list.
   - Modify the content in the editor and save your changes.

3. **Pinning Notes**:
   - Click the pin icon to pin/unpin a note.
   - Pinned notes will be highlighted and displayed at the top of the list.

4. **Deleting Notes**:
   - Click the trash icon to delete any note.


## Future Enhancements

- **Sharing Notes**: Adding functionality to share notes via email or a link.
- **User Authentication**: Allowing users to sign up and sync their notes across devices.
- **Rich Text Editing**: Expanding the editor with more formatting options (e.g., headings, lists, etc.).
- **Encryption Settings**: Providing advanced encryption options and key management for more flexibility.

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you'd like to change.

## Contact

- **GitHub**: [Github Profile](https://github.com/reetjain01)
- **Email**: jainreet112@gmail.com

---

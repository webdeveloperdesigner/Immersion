const { text } = require("body-parser");

const container = document.getElementById('note-container');
const addNoteButton = document.getElementById('add-note');

addNoteButton.addEventListener(click => {

    const note = document.createElement('div');
    note.className = 'add-note';
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Add a note...';

   

   note.addEventListener('dblclick', ()=>{
     if (confirm('Are you sure to delete this note?')) {
        note.remove();
     }
   })


})


note.appendChile(textarea);
addNoteButton.appendChild(note);

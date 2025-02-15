let createNewNote = document.getElementById("createNewNote");
let noteTitle = document.getElementById("noteTitle");
let noteContent = document.getElementById("noteContent");
let closeBtn = document.getElementById("closeBtn");

let popup = document.querySelector('.creating_note-container');

createNewNote.addEventListener("click", (e) => {
    popup.style.display = 'flex'


    // const note = document.createElement('div')
    // note.classList.add('note');
    // const note_title = document.createElement('p')
    // note_title.classList.add('note_title');
    // const note_date = document.createElement('p')
    // note_date.classList.add('note_date');
    //
    // note.appendChild(note_title);
    // note.appendChild(note_date);
    // document.querySelector('.scroll_block').appendChild(note);

})
closeBtn.addEventListener("click", (e) => {
    popup.style.display = 'none'
})






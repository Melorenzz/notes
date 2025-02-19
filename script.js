let createNewNote = document.getElementById("createNewNote");
let newNoteTitle = document.getElementById("newNoteTitle");
let noteContent = document.getElementById("noteContent");
let closeBtn = document.getElementById("closeBtn");
let popupCreateNote = document.getElementById("popupCreateNote");
let noteTitleOpen = document.getElementById("noteTitleOpen");
let popup = document.querySelector('.creating_note-container');
let notes = [];

// Auto-display popup when no elements are present
setInterval(() => {
    if((document.querySelector('.scroll_block')).childElementCount < 1){
        popup.style.display = 'flex'
        closeBtn.style.display = 'none';
    }

})
//////////////////////////////////////////////////////

createNewNote.addEventListener("click", (e) => {
    popup.style.display = 'flex'
    closeBtn.style.display = 'flex';

})
closeBtn.addEventListener("click", (e) => {
    popup.style.display = 'none'
})


popupCreateNote.addEventListener("click", (e) => {

    if((newNoteTitle.value).length < 1){
        newNoteTitle.style.border = '2px solid red'
        setTimeout(()=>{
            newNoteTitle.style.border = '2px solid #555'
        }, 1500)
    }else{

        // Creating HTML elements with class
        const note = document.createElement('div')
        note.classList.add('note');
        const note_title = document.createElement('p')
        note_title.classList.add('note_title');
        note_title.id = 'noteTitle';
        const deleteImg = document.createElement('img');
        deleteImg.src = './img/icons8-trash.svg'
        deleteImg.classList.add('delete_img');
        const note_date = document.createElement('p')
        note_date.classList.add('note_date');

        note.appendChild(deleteImg);
        note.appendChild(note_title);
        note.appendChild(note_date);
        document.querySelector('.scroll_block').appendChild(note);
        ////////////////////////////////////

        // Added a button to delete a note
        deleteImg.addEventListener('click', (e) => {
            note.remove();
            noteTitleOpen.value = '';
        })
        //////////////////////////////////////

        // Added the month and day when note was created
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const now = new Date();
        note_date.innerHTML = months[now.getMonth()] + ' ' +now.getDate();

        note_title.innerHTML = newNoteTitle.value;
        noteTitleOpen.value = newNoteTitle.value;

        noteTitleOpen.addEventListener('input', (e) => {
            note_title.innerHTML = noteTitleOpen.value;
        })
        ///////////////////////////////////////


        // Added note in the massive
        notes.push({
            id: notes.length ? notes[notes.length - 1].id + 1 : 1, // This line is generated by ChatGPT
            title: newNoteTitle.value,
            content: noteContent.value,
        })
        ///////////////////////////////


        // Cleaning input after creation
        newNoteTitle.value = "";
        noteContent.value = "";

        popup.style.display = 'none'
        ///////////////////////////////
    }
})






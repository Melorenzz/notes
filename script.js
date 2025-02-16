let createNewNote = document.getElementById("createNewNote");
let newNoteTitle = document.getElementById("newNoteTitle");
let noteContent = document.getElementById("noteContent");
let closeBtn = document.getElementById("closeBtn");
let popupCreateNote = document.getElementById("popupCreateNote");

let popup = document.querySelector('.creating_note-container');

if((document.querySelector('.scroll_block')).hasChildNodes()){
    popup.style.display = 'flex'
    closeBtn.style.display = 'none';
}

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
        const note = document.createElement('div')
        note.classList.add('note');
        const note_title = document.createElement('p')
        note_title.classList.add('note_title');
        note_title.id = 'noteTitle';


        const note_date = document.createElement('p')
        note_date.classList.add('note_date');

        note.appendChild(note_title);
        note.appendChild(note_date);
        document.querySelector('.scroll_block').appendChild(note);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const now = new Date();
        note_date.innerHTML = months[now.getMonth()] + ' ' +now.getDate();

        note_title.innerHTML = newNoteTitle.value;
        popup.style.display = 'none'
    }
})






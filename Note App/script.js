let index = 0;
const mainBox = document.querySelector(".mainBox");

function ShowNote(text = "") {
    let NoteBox = document.createElement("div")
    NoteBox.className = "note"
    NoteBox.innerHTML = `
    <div class="icons">
    <i class="fa-regular fa-floppy-disk save"></i>
    <i class="fa-regular fa-trash-can tras"></i>
    </div>
    <textarea>${text}</textarea>
    `;
    mainBox.appendChild(NoteBox);
    
    NoteBox.querySelector(".tras").addEventListener("click",
    function () {
        NoteBox.remove()
        saveNote()
    })
    
    NoteBox.querySelector('.save').addEventListener('click', () => saveNote());
    NoteBox.querySelector('textarea').addEventListener('focusout', ()=> saveNote())
    saveNote()
}


const saveNote = function () {
    const noteText = document.querySelectorAll("textarea")
    const data = []
    noteText.forEach((notes) => {
        data.push(notes.value)
    })
    localStorage.setItem(`note`, JSON.stringify(data))
}


function loadNotes() {
    const lsdata = JSON.parse(localStorage.getItem('note'));
    lsdata.forEach((notes) => {
        ShowNote(notes)
    })
}
loadNotes()


const searchFunction = ()=>{
    const srcText = document.querySelector("#search").value;
    console.log(srcText)
}
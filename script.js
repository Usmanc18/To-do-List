function sendNote() {

const inputElement = document.getElementById("input")
const noteContent = inputElement.value; 
 inputElement.value = "";

 let newNote = document.createElement("li")
 newNote.style = "height: 150px;";
 newNote.style.backgroundColor = getRandomColor();
 newNote.classList.add("container");
newNote.innerHTML = noteContent;
let allNotes = document.getElementById("notes");
allNotes.appendChild(newNote);
} 

function getRandomColor() {
    const COLORS = [
    "#a2d1fc", // index: 0
    "#ffc2cd", // 1
    "#97aedc",  // 2
    "#d957ae",  // 3
    "#b7cf8e",  // 4
    "#d5edc2", // 5  
    ];
    return COLORS[Math.floor(Math.random() * COLORS.length)];
    

}
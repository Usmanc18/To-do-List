
window.onload = function() {
    loadNotesFromLocalStorage();
};

function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        const notesArray = JSON.parse(savedNotes);
        notesArray.forEach(noteContent => {
            createNoteElement(noteContent);
        });
    }
}

function sendNote() {
    const inputElement = document.getElementById("input");
    const noteContent = inputElement.value.trim();
    if (noteContent !== '') {
        createNoteElement(noteContent);

        // Save the notes data to localStorage
        saveNotesToLocalStorage();
    }
    inputElement.value = "";
}

function saveNotesToLocalStorage() {
    const notesContainer = document.getElementById('notes');
    const notesArray = Array.from(notesContainer.children).map(note => note.textContent.trim());
    localStorage.setItem('notes', JSON.stringify(notesArray));
}

function createNoteElement(noteContent) {
    // Create a new note element
    const newNote = document.createElement("li");
    newNote.style = "height: 150px;";
    newNote.style.backgroundColor = getRandomColor();
    newNote.classList.add("container");
    newNote.textContent = noteContent;

    

    // Append the new note to the list
    const allNotes = document.getElementById("notes");
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
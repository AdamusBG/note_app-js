

const app = document.getElementById('app');

let myNoteList = new NoteList();
myNoteList.addNote("Testing1");
myNoteList.addNote("Testing one two three");

myNoteController = new NoteController(new NoteListView(myNoteList), app);

app.updateElement();

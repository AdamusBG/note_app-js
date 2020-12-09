const app = document.getElementById('app');

myNoteList = new NoteList;
myNoteList.addNote("I am a fairly long note");
myNoteList.addNote("Another good note, click me");
myNoteList.addNote("I am a third note on the page");

myNoteListView = new NoteListView(myNoteList);

myNoteController = new NoteController(myNoteListView, app);

myNoteController.updateElement();

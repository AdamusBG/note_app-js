const app = document.getElementById('app');

myNoteList = new NoteList;
myNoteList.addNote("Howdy1");
myNoteList.addNote("Howdy2");

myNoteListView = new NoteListView(myNoteList);

myNoteController = new NoteController(myNoteListView, app);

myNoteController.updateElement();

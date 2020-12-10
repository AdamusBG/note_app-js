// Functionality for updating the page to include a list of links to notes

const app = document.getElementById('app');

myNoteList = new NoteList;
myNoteList.addNote("I am a fairly long note");
myNoteList.addNote("Another good note, click me");
myNoteList.addNote("I am a third note on the page");

myNoteListView = new NoteListView(myNoteList);

myNoteController = new NoteController(myNoteListView, app);

myNoteController.updateElement();

// Functionality for switching to single note view when clicking on a note

makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteIndexFromUrl(window.location));
};

function getNoteIndexFromUrl(location) {
  return location.hash.split("#")[1].split("/")[1];
};

function showNote(index) {
  snv = new SingleNoteView(myNoteList.getNoteList()[index]);
  document
    .getElementById("app")
    .innerHTML = snv.getHTMLNote();
};

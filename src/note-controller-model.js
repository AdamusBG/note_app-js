class NoteController {
  constructor(noteListViewClass = NoteListView) {
    this.noteListViewClass = noteListViewClass;
  }

  setNoteList(noteList) {
    this.noteListView = (new this.noteListViewClass(noteList));
  }

  getNoteList() {
    return this.notelistView.getNoteList();
  }

  setElement(element) {
    this.element = element;
  }

  updateElement() {
    this.element.innerHTML = this.noteListView.getHTMLNotes();
  }
}

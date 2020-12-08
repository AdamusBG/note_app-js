class NoteController {
  constructor(noteListView, element) {
    this.noteListView = noteListView;
    this.element = element;
  }
  updateElement() {
    this.element.innerHTML = this.noteListView.getHTMLNotes();
  }
}

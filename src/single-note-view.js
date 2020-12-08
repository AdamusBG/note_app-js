class SingleNoteView {
  constructor(note) {
    this.note = note;
  }
  getHTMLNote() {
    return `<div>${this.note.getNote()}</div>`;
  }
}

class NoteList {
  constructor() {
    this.noteList = [];
  };

  addNote(note) {
    this.noteList.push(note);
  }

  getNoteList() {
    return this.noteList;
  };
}

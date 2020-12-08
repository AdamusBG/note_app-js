class NoteList {
  constructor(noteClass = Note) {
    this.noteClass = noteClass;
    this.noteList = [];
  };

  addNote(note) {
    this.noteList.push(new this.noteClass(note));
  }

  getNoteList() {
    return this.noteList;
  };
}

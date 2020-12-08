class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  getHTMLNotes() {
    var string = "<ul>";
    for (var note of this.noteList.getNoteList()) {
      string = string + "<li><div>" + note.getNote() + "</div></li>";
    };
    string = string + "</ul>";
    return string;
  }
}

class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  getHTMLNotes() {
    var string = "<ul>";
    for (var note of this.noteList.getNoteList()) {
      string = string + `<li><div>${this.#shortenText(note.getNote())}</div></li>`;
    };
    string = string + "</ul>";
    return string;
  }

  #shortenText(text) {
    if (text.length <= 20) {
      return text;
    } else {
      return text.slice(0, 20) + "...";
    }
  }
}

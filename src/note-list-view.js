class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  getHTMLNotes() {
    var string = "<ul>";
    for (var i = 0; i < this.noteList.getNoteList().length; i++){
      string = string + `<li><div id="${i}">${this.#shortenText(this.noteList.getNoteList()[i].getNote())}</div></li>`;
    }
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

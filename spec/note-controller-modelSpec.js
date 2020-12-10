console.log("Note controller model tests")
console.log("--------------------")

class fakeNoteListViewClass {
  constructor(noteList) {
    this.noteList = noteList;
  }

  getHTMLNotes() {
    return `<ul><li><a href="#notes/0">${this.noteList.getHTMLNotes()[0]}</a></li><li><a href="#notes/0">${this.noteList.getHTMLNotes()[1]}</a></li></ul>`;
  }
}

let fakeNoteList = {
  getHTMLNotes: function() {
    return ["note1", "note2"]
  }
}

let fakeElement = {
  innerHTML: ""
}

it("Calling updateElement will cause the elements innerHTML to change", function() {
  var myNoteController = new NoteController(fakeNoteListViewClass);
  myNoteController.setNoteList(fakeNoteList);
  myNoteController.setElement(fakeElement);
  myNoteController.updateElement();
  expect(fakeElement.innerHTML).toEqual("<ul><li><a href=\"#notes/0\">note1</a></li><li><a href=\"#notes/0\">note2</a></li></ul>");
})

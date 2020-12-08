class fakeNoteClass {
  constructor(text) {
    this.text = text;
  }
  getNote() {
    return this.text;
  }
}

it("First returns an empty array", function() {
  myNoteList = new NoteList(fakeNoteClass);
  expect(myNoteList.getNoteList()).toEqualArray([]);
});

it("Will return the correct note list after they have been added", function() {
  myNoteList = new NoteList(fakeNoteClass);
  myNoteList.addNote("note1");
  myNoteList.addNote("note2");
  expect(myNoteList.getNoteList()).toEqualArray([new fakeNoteClass("note1"), new fakeNoteClass("note2")]);
});

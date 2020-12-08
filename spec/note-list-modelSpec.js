it("First returns an empty array", function() {
  myNoteList = new NoteList();
  expect(myNoteList.getNoteList()).toEqualArray([]);
});

it("Will return the correct note list after they have been added", function() {
  myNoteList = new NoteList();
  myNoteList.addNote("note1");
  myNoteList.addNote("note2");
  expect(myNoteList.getNoteList()).toEqualArray(["note1", "note2"]);
});

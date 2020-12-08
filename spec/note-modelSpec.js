it("A note object can return its note", function() {
  myNote = new Note("Js is alright I guess");
  expect(myNote.getNote()).toEqual("Js is alright I guess");
})

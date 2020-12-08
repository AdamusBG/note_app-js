let fakeNoteListView = {
  getHTMLNotes: function() {
    return "<ul><li><div>Note1</div></li><li><div>Note1</div></li></ul>"
  }
}

let fakeElement = {
  innerHTML: ""
}

it("Calling updateElement will cause the elements innerHTML to change", function() {
  var myNoteController = new NoteController(fakeNoteListView, fakeElement);
  myNoteController.updateElement();
  expect(fakeElement.innerHTML).toEqual("<ul><li><div>Note1</div></li><li><div>Note1</div></li></ul>");
})

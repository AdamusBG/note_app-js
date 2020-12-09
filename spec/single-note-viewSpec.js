console.log("Single note view tests")
console.log("--------------------")

let fakeNote = { getNote: function() {
  return "I am one, single, solitary note"
} }

it("Returns the text of the internal note formatted for HTML", function() {
  mySingleNoteView = new SingleNoteView(fakeNote);
  expect(mySingleNoteView.getHTMLNote()).toEqual("<div>I am one, single, solitary note</div>");
})

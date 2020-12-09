console.log("Note list view tests")
console.log("--------------------")

let mockNote1 = { getNote: function() {return "I like cheese"}}
let mockNote2 = { getNote: function() {return "Actually, I don't really like cheese"}}
let mockNote3 = { getNote: function() {return "Changed my mind again, cheese is the best"}}

let mockNoteList = { getNoteList: function() {return [mockNote1, mockNote2, mockNote3]}}

let mockNoteListEmpty = { getNoteList: function() {return []}}

it("Calling getHTMLNotes when the internal note list is empty returns the correct HTML string", function() {
  noteListViewEmpty = new NoteListView(mockNoteListEmpty);
  expect(noteListViewEmpty.getHTMLNotes()).toEqual("<ul></ul>");
})

it("Calling getHTMLNotes when the internal note list has three notes returns the correct HTML string", function() {
  noteListView = new NoteListView(mockNoteList);
  expect(noteListView.getHTMLNotes()).toEqual("<ul><li><div>I like cheese</div></li><li><div>Actually, I don't really like cheese</div></li><li><div>Changed my mind again, cheese is the best</div></li></ul>");
})

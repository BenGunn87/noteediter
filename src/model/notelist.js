export class NoteList {
  constructor () {
    // создаем счетчик
    if (!localStorage['maxNoteId']) {
      localStorage.setItem('maxNoteId', 0);
      localStorage.setItem('noteArr', JSON.stringify({}));
    }
    this.maxNoteId = +localStorage.getItem('maxNoteId');

    this.ListNoteId = JSON.parse(localStorage.getItem('noteArr'));
    this.noteList = [];
    for (let noteid in this.ListNoteId) {
      if (this.ListNoteId.hasOwnProperty(noteid)) {
        this.noteList.unshift(JSON.parse(localStorage.getItem(noteid)));
      }
    }
  }
  getId () {
    this.maxNoteId += 1;
    localStorage.setItem('maxNoteId', this.maxNoteId);
    return this.maxNoteId;
  }
  addNote ({ title = '', noteText = '' }) {
    let noteid = this.getId();
    const newNote = {
      'noteid': noteid,
      'title': title,
      'noteText': noteText
    };
    this.noteList.unshift(newNote);
    this.ListNoteId['note-' + noteid] = noteid;
    localStorage.setItem('noteArr', JSON.stringify(this.ListNoteId));
    localStorage.setItem('note-' + noteid, JSON.stringify(newNote));
    return newNote;
  }
  updNote ({ noteid, title = '', noteText = '' }) {
    const newNote = {
      'noteid': noteid,
      'title': title,
      'noteText': noteText
    };
    const index = this.searchNote(newNote.noteid);
    if (index !== -1) {
      this.noteList[index] = newNote;
      localStorage.setItem('note-' + newNote.noteid, JSON.stringify(newNote));
      return newNote;
    }
  }
  delNote (noteid) {
    const index = this.searchNote(noteid);
    if (index !== -1) {
      this.noteList.splice(index, 1);
      delete this.ListNoteId['note-' + noteid];
      localStorage.removeItem('note-' + noteid);
      localStorage.setItem('noteArr', JSON.stringify(this.ListNoteId));
    }
  }
  searchNote (noteid) {
    for (let i = 0; i < this.noteList.length; i++) {
      if (this.noteList[i].noteid === noteid) {
        return i;
      }
    }
    return -1;
  }
  getNoteById (noteid) {
    if (noteid !== -1) {
      const index = this.searchNote(noteid);
      return this.noteList[index];
    } else {
      return {
        noteid: -1,
        title: '',
        noteText: ''
      }
    }
  }
}

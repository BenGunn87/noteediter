import React from 'react'
import { EditContainer } from './containers/EditContainer/EditContainer'
import { ViewContainer } from './containers/ViewContainer/ViewContainer'
import { NoteList } from './model/notelist'

/* eslint-disable */
import _ from './App.css';
/* eslint-enable */

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.noteList = new NoteList();
    this.state = {
      activeForm: 'view',
      searchStr: '',
      notes: this.noteList.noteList,
      selectedNoteId: -1
    };
  }
  onNoteCardClick = (noteid) => {
    this.setState({ selectedNoteId: noteid });
  }
  onNoteCardDoubleClick = (noteid) => {
    this.setState({
      selectedNoteId: noteid,
      activeForm: 'edit'
    });
  }
  onBtnAddClick = (event) => {
    this.setState({ activeForm: 'add' });
  }
  onBtnBackClick = (event) => {
    this.setState({ activeForm: 'view' });
  }
  onBtnSaveClick = (event, saveNote) => {
    let noteid;
    if (this.state.activeForm === 'add') {
      const newNote = this.noteList.addNote(saveNote);
      noteid = newNote.noteid;
    }
    if (this.state.activeForm === 'edit') {
      saveNote.noteid = this.state.selectedNoteId;
      this.noteList.updNote(saveNote);
      noteid = saveNote.noteid;
    }
    this.setState({
      activeForm: 'view',
      notes: this.noteList.noteList,
      selectedNoteId: noteid
    });
  }
  onBtnDelClick = (event) => {
    if (this.state.selectedNoteId === -1) return;
    this.noteList.delNote(this.state.selectedNoteId);
    this.setState({
      notes: this.noteList.noteList,
      selectedNoteId: -1
    });
  }
  onSearchChange = (event) => {
    this.setState({
      searchStr: event.target.value,
      selectedNoteId: -1
    });
  }
  render () {
    let activeForm;
    // форма простомтка
    if (this.state.activeForm === 'view') {
      const viewCard = this.noteList.getNoteById(this.state.selectedNoteId);
      const notes = this.state.notes.filter((item) => {
        return (
          item.title.toUpperCase().indexOf(this.state.searchStr.toUpperCase()) !== -1 ||
          item.noteText.toUpperCase().indexOf(this.state.searchStr.toUpperCase()) !== -1
        );
      });
      activeForm = <ViewContainer
        viewCard={viewCard}
        notes={notes}
        selectedNoteId={this.state.selectedNoteId}
        onBtnAddClick={this.onBtnAddClick}
        onBtnDelClick={this.onBtnDelClick}
        onSearchChange={this.onSearchChange}
        onNoteCardClick={this.onNoteCardClick}
        onNoteCardDoubleClick={this.onNoteCardDoubleClick}
        searchStr={this.state.searchStr}
      />;
    }
    // форма редактирования
    if (this.state.activeForm === 'edit') {
      const editNote = this.noteList.getNoteById(this.state.selectedNoteId);
      activeForm = <EditContainer
        editNote={editNote}
        onBtnSaveClick={this.onBtnSaveClick}
        onBtnBackClick={this.onBtnBackClick}
      />;
    }
    // форма добавления
    if (this.state.activeForm === 'add') {
      const editNote = {
        title: '',
        noteText: ''
      };
      activeForm = <EditContainer
        editNote={editNote}
        onBtnBackClick={this.onBtnBackClick}
        onBtnSaveClick={this.onBtnSaveClick}
      />;
    }
    return (
      <div className="mainbox">
        {activeForm}
      </div>
    );
  }
}

export default App;

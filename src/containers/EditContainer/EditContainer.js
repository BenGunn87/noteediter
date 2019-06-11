import React from 'react'
import { EditBox } from '../../components/EditBox/EditBox';
import { ButtonsPanel } from '../../components/ButtonsPanel/ButtonsPanel';

/* eslint-disable */
import _ from './EditContainer.css';
/* eslint-enable */

export class EditContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.editNote;
  }
  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }
  onNoteTextChange = (event) => {
    this.setState({ noteText: event.target.value });
  }
  onBtnSaveClick = (event) => {
    this.props.onBtnSaveClick(
      event,
      this.state
    )
  }
  render () {
		const btns = [{
			id: 'btnSave',
			title: 'Сохранить',
			name: 'Сохранить',
			onClick: this.onBtnSaveClick,
			btnDis: (this.state.title.trim() === '' || this.state.noteText.trim() === '')
		},
		{
			id: 'btnBack',
			title: 'Назад',
			name: 'Назад',
			onClick: this.props.onBtnBackClick,
			btnDis: false
		}];
		const note = {
			title: this.state.title,
      noteText: this.state.noteText
		};
    return (
      <div className="edit-form">
        <div className="edit-form__buttonspanel">
          <ButtonsPanel 
					  btns={btns}
					/>
        </div>
        <div className="edit-form__editbox">
          <EditBox
            note={note}
            onTitleChange={this.onTitleChange}
            onNoteTextChange={this.onNoteTextChange}
          />
        </div>
      </div>
    );
  }
}

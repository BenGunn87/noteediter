import React from 'react';

/* eslint-disable */
import _ from './EditBox.css';
/* eslint-enable */

export function EditBox(props) {
	const {title, noteText} = props.note;
  return (
    <div className="editbox">
      <div className={'editbox__note-title row'}>
        <div className="textbox">
          <input
            className={'u-full-width textbox__input'}
            id="note-title"
            type="text"
            name="note-title"
            value={title}
            placeholder="Заголовок"
						onChange={props.onTitleChange}
          />
        </div>
      </div>
      <div className={'editbox__note-textarea row'}>
        <textarea
          className={'u-full-width textareabox__textarea'}
          id="note-textarea"
          name="note-textarea"
          placeholder="Заметка"
          value={noteText}
          onChange={props.onNoteTextChange}
        />
      </div>
    </div>
  );
};

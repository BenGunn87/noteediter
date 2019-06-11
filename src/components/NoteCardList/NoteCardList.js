import React from 'react';
import { NoteCard } from '../NoteCard/NoteCard';

/* eslint-disable */
import _ from './NoteCardList.css';
/* eslint-enable */

export function NoteCardList(props) {
	const noteList = props.notes.map((note) => {
		const noteid = note.noteid;
    return (
      <li key={noteid} onDoubleClick={() => { props.onNoteCardDoubleClick(noteid) }}>
        <NoteCard
          note={note}
          selected={noteid === props.selectedNoteId}
          onNoteCardClick={props.onNoteCardClick}
        />
      </li>
    )
  });
	return (
    <div className="note-card-list">
      <div className="note-card-list__search">
        <div className="textbox">
          <input
            className={'u-full-width textbox__input'}
            id="search"
            type="text"
            name="search"
            value={props.searchStr}
            placeholder="Поиск"
            onChange={props.onSearchChange}
          />
        </div>
      </div>
      <div className="note-card-list__list">
        <ul>
          {noteList}
        </ul>
      </div>
    </div>
  );
};


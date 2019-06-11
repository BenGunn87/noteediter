import React from 'react';
import { NoteCardList } from '../../components/NoteCardList/NoteCardList';
import { ButtonsPanel } from '../../components/ButtonsPanel/ButtonsPanel';
import { ViewBox } from '../../components/ViewBox/ViewBox';

/* eslint-disable */
import _ from './ViewContainer.css';
/* eslint-enable */

export function ViewContainer (props) {
  const btns = [{
    id: 'btnAdd',
		title: 'Создать',
    name: 'Создать',
    onClick: props.onBtnAddClick,
		btnDis: false
  },
	{
    id: 'btnDel',
		title: 'Удалить',
    name: 'Удалить',
    onClick: props.onBtnDelClick,
		btnDis: props.viewCard === null
  }];
  return (
    <div className="view-form">
      <div className={'col col--4 view-form__note-card-list heightAll'}>
        <NoteCardList
          notes={props.notes}
          selectedNoteId={props.selectedNoteId}
          searchStr={props.searchStr}
          onSearchChange={props.onSearchChange}
          onNoteCardClick={props.onNoteCardClick}
          onNoteCardDoubleClick={props.onNoteCardDoubleClick}
        />
      </div>
      <div className={'col col--8 heightAll view-form__viewblock'}>
        <div className="view-form__buttonspanel">
          <ButtonsPanel
            btns={btns}
          />
        </div>
        <div className="view-form__viewbox">
          <ViewBox
            viewCard={props.viewCard}
          />
        </div>
      </div>
    </div>
  );
};
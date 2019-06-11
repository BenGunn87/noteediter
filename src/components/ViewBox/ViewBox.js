import React from 'react';

/* eslint-disable */
import _ from './ViewBox.css';
/* eslint-enable */

export function ViewBox (props) {
	const { title, noteText } = props.viewCard;
	return (
    <div className = "viewbox">
      <h4 className="viewbox__note-title">{title}</h4>
      <div className="viewbox__note-text">{noteText}</div>
    </div>
  );
};

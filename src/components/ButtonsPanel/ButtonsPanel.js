import React from 'react';

/* eslint-disable */
import _ from './ButtonsPanel.css';
/* eslint-enable */

export function ButtonsPanel(props) {
	const btns = props.btns;
	const btnList = btns.map((btn) => {
		const {id, title, name, onClick, btnDis} = btn;
		return (
		  <div className="buttons-panel__button" key={id}>
				<button 
					className="button__button" 
					id={id}
					title={title}
					onClick={onClick}
					disabled={btnDis}
				>
					{name}
				</button>
			</div>
		);
	});
	return (
		<div className="row buttons-panel">
			{btnList}	
		</div>
	);			
}

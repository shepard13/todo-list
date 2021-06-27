import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	render() {
		return (
			<form className='search-panel d-flex'>
				<input type='text' className='form-control' placeholder='search' />
			</form>
		);
	}
}

import React from 'react';

import './componentStyles/SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="container centered">
				<div className="md-form mt-0 small ">
					<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
				</div>
			</div>
		);
	}
}

export default SearchBar;

import React from 'react';
import SearchBar from './SearchBar';
import './componentStyles/Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="sticky-top">
				<div className="jumbotron jumbotron-fluid no-color">
					<div className="container centered">
						<h1 style={{marginTop: 0, fontSize: '190%'}} className="display-4 text-center grow animated fadeIn">Star Wars</h1>
						<hr className="m-4 animated rubberBand headerHR" />
						<SearchBar />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

import React from 'react';
import SearchBar from './SearchBar';
import './componentStyles/Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="sticky-top">
				<div className="jumbotron jumbotron-fluid no-color">
					<div className="container">
						<h1 className="display-4 text-center grow animated fadeIn">Star Wars</h1>
						<p className="lead text-center grow animated fadeIn">Data for all the stars...</p>
						<hr className="my-4 animated rubberBand" />
                        <SearchBar />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

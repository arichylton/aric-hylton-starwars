import React from 'react';

import SearchBar from './SearchBar';
import './componentStyles/Scroll.css';

class Scroll extends React.Component {
	render() {
		return (
			<div className="sticky-top nav-color">
                <h2 className="nav-h2 animated slideInLeft">Star Wars</h2>
				<div style={{ margin: 0, display: 'flex', alignItems: 'center'}}>
					<SearchBar />
				</div>
			</div>
		);
	}
}

export default Scroll;

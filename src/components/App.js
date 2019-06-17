import React from 'react';

import Header from './Header';
import SearchList from './SearchList';
import Footer from './Footer';

import './componentStyles/App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<div id="wrap">
					<div id="main">
						<Header />
						<SearchList />
					</div>
				</div>

				<div id="footer">
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;

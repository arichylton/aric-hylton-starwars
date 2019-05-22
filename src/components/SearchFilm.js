import React from 'react';

import './componentStyles/SearchItem.css';

class SearchFilm extends React.Component {
	render() {
		const { episode, title, director, date } = this.props;

		return (
			<div className="bg-red dib br3 pa3 ma2 grow bw2 shadow-5 searchItem">
				<div className="tc">
					<h1>{episode}</h1>
					<h3>{title}</h3>
					<h4>Director: {director}</h4>
					<h4>{date}</h4>
				</div>
			</div>
		);
	}
}

export default SearchFilm;
import React from 'react';

import './componentStyles/SearchItem.css';

class SearchItem extends React.Component {
	render() {
		const { name, height, mass, eyeColor } = this.props;

		return (
			<div className="bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 searchItem">
				<div className="tc">
					<h1>{name}</h1>
					<h4>Height {`${Math.floor(height)}"`}</h4>
					<h4>Mass {`${Math.floor(mass)}`}</h4>
					<h4>Eye-Color {eyeColor}</h4>
				</div>
			</div>
		);
	}
}

export default SearchItem;

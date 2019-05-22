import React from 'react';

import './componentStyles/SearchItem.css';

class SearchStarShips extends React.Component {
	render() {
		const { name, model, passenger, cost } = this.props;

		return (
			<div className="bg-purple dib br3 pa3 ma2 grow bw2 shadow-5 searchItem">
				<div className="tc">
					<h3>{name}</h3>
					<h4>{model}</h4>
					<h4>Passengers: {passenger}</h4>
					<h4>Cost: {cost}</h4>
				</div>
			</div>
		);
	}
}

export default SearchStarShips;
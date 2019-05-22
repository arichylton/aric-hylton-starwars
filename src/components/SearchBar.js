import React from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions/actions';

import './componentStyles/SearchBar.css';

class SearchBar extends React.Component {
	updateInputValue = (text) => {
		this.props.searchItem(text);
	};

	componentDidMount() {
		this.nameInput.focus();
	}

	render() {
		return (
			<div className="container centered searchBar">
				<div className="md-form mt-0 small animated rubberBand">
					<input
						className="form-control"
						type="text"
						placeholder="Search for the stars"
						value={this.props.text}
						ref={(input) => {
							this.nameInput = input;
						}}
						aria-label="Search"
						onChange={(event) => this.updateInputValue(event.target.value)}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { text: state.searchTerm.text };
};

export default connect(mapStateToProps, { searchItem })(SearchBar);

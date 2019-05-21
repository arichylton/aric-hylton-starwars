import React from 'react';
import { getStars } from '../actions/actions';
import { connect } from 'react-redux';

import './componentStyles/SearchList.css';

class SearchList extends React.Component {
    componentDidMount() {
        this.props.getStars();
    }

    render() {
        if (this.props.isPending) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div className="container searchListPadding">
                    <h1 className="text-center grow">{this.props.data.name}</h1>
                </div>
            )
        }       
    }
}

const mapStateToProps = state => {
    return { 
        data: state.getData.data,
        isPending: state.getData.isPending,
        error: state.getData.error
    };
}

export default connect(mapStateToProps, { getStars })(SearchList);
import React from 'react';
import { getStars } from '../actions/actions';
import { connect } from 'react-redux';

import SearchItem from './SearchItem';
import './componentStyles/SearchList.css';

class SearchList extends React.Component {
    componentDidMount() {
        this.props.getStars();       
    }

    renderSearchItemList = () => {
        return this.props.data.filter(user => user.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map((user, i) => {
            return (
                <SearchItem
                    key={i}
                    name={user.name}
                    height={user.height * 0.393701}
                    eyeColor={user.eye_color}
                    mass={user.mass}
                />
    
            )
        });
    }
    

    render() {
        if (this.props.isPending) {
            return (
                <div className="container spinner searchListPadding">
                    <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>             
            )
        } else {
            return (
                <div className="container searchListPadding">
                    {this.renderSearchItemList()}
                </div>
            )
        }       
    }
}

const mapStateToProps = state => {
    return { 
        data: state.getData.data,
        isPending: state.getData.isPending,
        error: state.getData.error,
        searchTerm: state.searchTerm.text
    };
}

export default connect(mapStateToProps, { getStars })(SearchList);
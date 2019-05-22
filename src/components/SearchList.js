import React from 'react';
import { getStars, getFilms } from '../actions/actions';
import { connect } from 'react-redux';

import SearchPeople from './SearchPeople';
import SearchFilm from './SearchFilm';
import './componentStyles/SearchList.css';

class SearchList extends React.Component {
    componentDidMount() {
        this.props.getStars();       
        this.props.getFilms();       
    }

    renderSearchPeopleList = () => {
        return this.props.userData.filter(user => user.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map((user, i) => {
            return (
                <SearchPeople
                    key={i}
                    name={user.name}
                    height={user.height * 0.393701}
                    eyeColor={user.eye_color}
                    mass={user.mass}
                />
    
            )
        });
    }

    renderSearchFilmsList = () => {
        return this.props.filmData.filter(film => film.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map((film, i) => {
            return (
                <SearchFilm
                    key={i}
                    episode={film.episode_id}
                    title={film.title}
                    director={film.director}
                    date={film.release_date}
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
                <div style={{marginTop: 140 }}>

                    <div className="container searchListPadding">                   
                        {this.renderSearchFilmsList()}                                  
                    </div>
                    <div className="container searchListPadding">                   
                        {this.renderSearchPeopleList()}                                  
                    </div>                    
                </div>
                
            )
        }       
    }
}

const mapStateToProps = state => {
    return { 
        userData: state.getData.data,
        userIsPending: state.getData.isPending,
        userError: state.getData.error,
        filmData: state.getFilms.data,
        filmIsPending: state.getFilms.isPending,
        filmError: state.getFilms.error,
        searchTerm: state.searchTerm.text
    };
}

export default connect(mapStateToProps, { getStars, getFilms })(SearchList);
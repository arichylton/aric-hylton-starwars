import React from 'react';
import { getStars, getFilms, getStarShips } from '../actions/actions';
import { connect } from 'react-redux';

import SearchPeople from './SearchPeople';
import SearchStarShips from './SearchStarShips';
import SearchFilm from './SearchFilm';
import './componentStyles/SearchList.css';

class SearchList extends React.Component {
    componentDidMount() {
        this.props.getStars();       
        this.props.getFilms();       
        this.props.getStarShips();
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

    renderSearchStarShipsList = () => {
        return this.props.starShipData.filter(starship => starship.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map((starship, i) => {
            return (
                <SearchStarShips
                    key={i}
                    model={starship.model}
                    name={starship.name}
                    passenger={starship.passengers}
                    cost={starship.cost_in_credits}
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
                <div style={{marginTop: 60 }}>

                    <div className="container searchListPadding">                   
                        {this.renderSearchFilmsList()}                                                                  
                        {this.renderSearchPeopleList()}
                        {this.renderSearchStarShipsList()}                               
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
        starShipData: state.getStarShips.data,
        starShipIsPending: state.getStarShips.isPending,
        starShipError: state.getStarShips.error,
        searchTerm: state.searchTerm.text
    };
}

export default connect(mapStateToProps, { getStars, getFilms, getStarShips })(SearchList);
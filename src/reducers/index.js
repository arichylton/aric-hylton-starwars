import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import searchItemReducer from './searchItemReducer';
import getFilmsReducer from './getFilmsReducer';
import getStarShipsReducer from './getStarShipsReducer';

export default combineReducers({
    getData: getDataReducer,
    searchTerm: searchItemReducer,
    getFilms: getFilmsReducer,
    getStarShips: getStarShipsReducer
})
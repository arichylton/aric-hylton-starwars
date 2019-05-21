import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import searchItemReducer from './searchItemReducer';

export default combineReducers({
    getData: getDataReducer,
    searchTerm: searchItemReducer
})
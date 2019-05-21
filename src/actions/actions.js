export const getStars = () => async dispatch => {
    dispatch({ type: 'GET_DATA_PENDING' });

    try {
        const response = await fetch('https://swapi.co/api/people/');
        const data = await response.json();
    
        console.log(data.results);
    
        dispatch({ type: 'GET_DATA', payload: data.results });
    } catch (err) {
        dispatch({ type: 'GET_DATA_FAILURE', payload: err })
    }
}

export const searchItem = text => {
    return {
        type: 'SEARCH_FIELD',
        payload: text
    }
}
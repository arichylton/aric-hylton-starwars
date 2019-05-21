export const getStars = () => async dispatch => {
    dispatch({ type: 'GET_DATA_PENDING' });

    try {
        const response = await fetch('https://swapi.co/api/people/1/');
        const data = await response.json();
    
        console.log(data);
    
        dispatch({ type: 'GET_DATA', payload: data });
    } catch (err) {
        dispatch({ type: 'GET_DATA_FAILURE', payload: err })
    }
}
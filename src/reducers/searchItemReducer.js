const initialState = {
    text: ''
}

export default (state=initialState, action={}) => {
    switch(action.type) {
        case 'SEARCH_FIELD':
            return {...state, text: action.payload}
        default:
            return state;
    }
}
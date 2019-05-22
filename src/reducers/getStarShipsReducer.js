const initialStateData = {
    isPending: false,
    data: [],
    error: ''
}


export default (state=initialStateData, action={}) => {
    switch (action.type) {
        case 'GET_STARSHIPS_PENDING':
            return { ...state, isPending: true }
        case 'GET_STARSHIPS':
            return { ...state, data: action.payload, isPending: false }
        case 'GET_STARSHIPS_FAILURE':
            return { ...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}
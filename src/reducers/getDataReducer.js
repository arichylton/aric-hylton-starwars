const initialStateData = {
    isPending: false,
    data: [],
    error: ''
}


export default (state=initialStateData, action={}) => {
    switch (action.type) {
        case 'GET_DATA_PENDING':
            return { ...state, isPending: true }
        case 'GET_DATA':
            return { ...state, data: action.payload, isPending: false }
        case 'GET_DATA_FAILURE':
            return { ...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}

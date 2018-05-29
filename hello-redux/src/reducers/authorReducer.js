
const initialState = {
    authorList: []
}

const authorReducer = (state=initialState, action) => {
    switch(action.type) {
        case "AUTHORS":
            return {...state, authorList: action.payload};
        default:
            break;
    }

    return state;
}

export {
    authorReducer
}
import _ from 'lodash';

const initialState={
    booklist: []
};

const bookReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'BOOKS':
            var books = state.booklist.length === 0 ? action.payload: state.booklist; 
            return {...state, booklist: books};
        case 'ADD_BOOK':
            return {...state, 
                        booklist: [...state.booklist, action.payload]
                    };
        case 'DELETE_BOOK':
            var indexPosition = _.findIndex(state.booklist, (obj) => obj.id === action.payload.id);
            return {...state, 
                       booklist: [...state.booklist.slice(0, indexPosition)
                                     .concat(state.booklist.slice(indexPosition+1))]};
        default:
           break;
    }   
    return state;
}

export {
    bookReducer
}
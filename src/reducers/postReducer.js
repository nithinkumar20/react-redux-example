import { FETCH_POSTS, NEW_POST } from '../Actions/actionTypes';

const intialState = {
    items: [],
    item: {}
}

export default (state = intialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
        console.log('reduces fetch')
            return {
                ...state,
                items: action.data
            }
        case NEW_POST:
        console.log('reduces new')
            return {
                ...state,
                item: action.data
            }
        default:
            return state;
    }
}
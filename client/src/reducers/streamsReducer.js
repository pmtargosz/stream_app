import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ...action.payload.reduce((acc, cur) => {
                acc[cur.id] = cur
                return acc
            }, {}) }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM: 
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            const { [action.payload]: _, ...newState } = state
            return newState
        default:
            return state
    }
}
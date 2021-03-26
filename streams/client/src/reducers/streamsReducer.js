import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from '../actions/types';

const INITIAL_STATE = {};

const streamsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            const newState = { ...state };
            action.payload.forEach(stream => {
                newState[stream.id] = { ...stream };
            });
            return newState;
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            const { [action.payload]: _, ...rest } = state;
            return rest;
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};

export default streamsReducer;

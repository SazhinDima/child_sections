import { combineReducers } from 'redux';

import { SECTIONS, TYPES } from "../actions/" //Import the actions types constant we defined in our actions

let dataState = { sections: [], types: [], loading: true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {

        case SECTIONS:
            state = Object.assign({}, state, { sections: action.sections, loading:false });
            return state;

        case TYPES:
            state = Object.assign({}, state, { types: action.types, loading:false });
            return state;

        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;
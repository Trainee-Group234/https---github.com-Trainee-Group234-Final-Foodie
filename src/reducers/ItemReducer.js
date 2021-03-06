import {GET_ITEM_LIST} from "../actions/types";

const initialState = {
    item: []
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_ITEM_LIST:
           return({
                ...state,
            item: action.payload
        })
        default:
            return state;
    }
}
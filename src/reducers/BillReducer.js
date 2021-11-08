import { SAVE_BILL } from "../actions/types";

const initialState = {
    bill: {},
    items:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case SAVE_BILL:
           return({
                ...state,
            bill: action.payload,
            items: action.payload.items
        })
        default:
            return state;
    }
}
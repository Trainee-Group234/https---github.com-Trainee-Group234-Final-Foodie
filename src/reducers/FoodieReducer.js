import { REGISTER_CUST } from "../actions/types";

const initialState = {
    customer: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case REGISTER_CUST:
           return({
                ...state,
            customer: action.payload
        })
        default:
            return state;
    }
}
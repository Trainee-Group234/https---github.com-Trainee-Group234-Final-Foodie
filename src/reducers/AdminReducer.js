import { BLOCK, GET_CUSTOMERS, SET_ADMIN_USER, UNBLOCK } from "../actions/types";

const initialState = {
    admin: {},
    customers:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case SET_ADMIN_USER:
           return({
                ...state,
            admin: action.payload
        })
        case GET_CUSTOMERS:
           return({
                ...state,
            customers: action.payload
        })
        case BLOCK:
           return({
                ...state,
            customers: action.payload
        })
        case UNBLOCK:
           return({
                ...state,
            customers: action.payload
        })
        default:
            return state;
    }
}
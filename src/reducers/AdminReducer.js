import { GET_CUSTOMERS, SET_ADMIN_USER } from "../actions/types";

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
        default:
            return state;
    }
}
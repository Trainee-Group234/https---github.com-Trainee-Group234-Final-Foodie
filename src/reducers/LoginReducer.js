import { CURRENT_USER } from "../actions/types";

const initialState = {
    customer:{},
    validToken: false
}

export default function(state = initialState, action){
    switch (action.type) {
        case CURRENT_USER:
            return{
                customer: action.payload,
                validToken: true
            }
            
    
        default:
            return state;
    }
}
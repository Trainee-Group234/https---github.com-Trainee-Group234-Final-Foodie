import { GET_CATEGORY_LIST, REMOVE_CATEGORY } from "../actions/types";


const initialState = {
   allcategory:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_CATEGORY_LIST:
           return({
                ...state,
            allcategory: action.payload
        });
        case REMOVE_CATEGORY:
           return({
                ...state
        });
        default:
            return state;
    }
}
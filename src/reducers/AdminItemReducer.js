import { ADD_CATEGORY, ADD_ITEM, GET_ALL_ITEM, GET_CATEGORY_LIST, REMOVE_CATEGORY } from "../actions/types";


const initialState = {
   allcategory:[],
    items:[]
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
        case ADD_CATEGORY:
           return({
                ...state,
                allcategory: action.payload 
        });
        case ADD_ITEM:
           return({
                ...state,
        });
        case GET_ALL_ITEM:
           return({
                ...state,
                items: action.payload
        });
        default:
            return state;
    }
}
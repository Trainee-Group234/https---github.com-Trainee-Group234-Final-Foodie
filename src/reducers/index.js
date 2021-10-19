import { combineReducers } from "redux";
import FoodieReducer from "./FoodieReducer";

export const rootReducer = combineReducers({
   foodie: FoodieReducer
})
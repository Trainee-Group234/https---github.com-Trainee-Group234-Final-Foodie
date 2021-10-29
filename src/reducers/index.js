import { combineReducers } from "redux";
import AdminItemReducer from "./AdminItemReducer";
import AdminReducer from "./AdminReducer";
import BillReducer from "./BillReducer";
import CategoryReducers from "./CategoryReducers";
import errorReducer from "./errorReducer";
import FoodieReducer from "./FoodieReducer";
import ItemReducer from "./ItemReducer";
import LoginReducer from "./LoginReducer";

export const rootReducer = combineReducers({
   foodie: FoodieReducer,
   login: LoginReducer,
   admin: AdminReducer,
   category: CategoryReducers,
   items: ItemReducer,
   categoryList: AdminItemReducer,
   errors: errorReducer,
   bills: BillReducer
})
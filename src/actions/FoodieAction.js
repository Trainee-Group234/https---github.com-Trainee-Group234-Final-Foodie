import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerCustomer = (customer, history) => async dispatch =>{
    try {
        await axios.post("http://localhost:8081/api/customer", customer);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    }
}
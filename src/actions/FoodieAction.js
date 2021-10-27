import axios from "axios";
import { CURRENT_USER, GET_CATEGORY, GET_ERRORS, GET_ITEM_LIST } from "./types";
import jwtDecode from "jwt-decode";
import setJwtToken from "../security/setJwtToken";

export const registerCustomer = (customer, history) => async dispatch =>{
    try {
        await axios.post("http://localhost:8081/api/customer", customer);
        history.push("/login");
        window.alert("We had sent a confirmation email to acctivate your account!");
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

export const login = (customer, history) => async dispatch =>{
    try {
        const res = await axios.post("http://localhost:8081/api/customer/login", customer);
        history.push("/hotels");
        console.log(res.data)
        //getting JWT Token
        const {token} = res.data
        //Storing in loacal Storage
        localStorage.setItem("jwtToken", token)
        //setting token in header
        setJwtToken(token)
        //Decode jwt Token on react
        const decoded = jwtDecode(token);
        console.log(decoded)
        //dispatch to SecurityReducer
        dispatch({
            type: CURRENT_USER,
            payload: decoded 
        })
    } catch (error) {

        
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setJwtToken(false);
    dispatch({
        type: CURRENT_USER,
        paylod: {}
    })
}

export const getCategory = () => async dispatch => {
    const res = await axios.get("http://localhost:8081/api/foodie/category/all");
    console.log(res.data);
   // localStorage.setItem("categoryList",JSON.stringify(res.data))
    dispatch({
        type: GET_CATEGORY,
        payload: res.data
    })
}

export const getItems = (itemName) => async dispatch => {
    const res = await axios.get(`http://localhost:8081/api/foodie/category/${itemName}`);
    console.log(res.data)
    dispatch({
        type: GET_ITEM_LIST,
        payload: res.data
    })
}
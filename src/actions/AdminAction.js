import axios from "axios";
import { ADD_CATEGORY, ADD_ITEM, GET_ALL_ITEM, GET_CATEGORY, GET_CATEGORY_LIST, GET_CUSTOMERS, GET_ITEMS, REMOVE_CATEGORY, REMOVE_ITEM, SET_ADMIN_USER } from "./types";

export const adminLogin = (login, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8081/api/customer/admin/login",login);
        history.push("/dashboard")
        const now = new Date()
        const item = {
            value: res.data.login.username,
            exp: now.getTime() + 30000
        }
        localStorage.setItem("admin", item);
        dispatch({
            type: SET_ADMIN_USER,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const adminLogout = () => dispatch => {
    localStorage.removeItem("admin")
    dispatch({
        type: SET_ADMIN_USER,
        paylod: {}
    })
}

export const getCustomers = () => async dispatch => {
    try {
        const res =await axios.get("http://localhost:8081/api/customer/all");
        console.log(res.data);
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const getCategory = () => async dispatch => {
    try {
        const res =await axios.get("http://localhost:8081/api/customer/category/all");
        console.log(res.data);
        dispatch({
            type: GET_CATEGORY_LIST,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const removeCategory = (name,history) => async dispatch => {
    try {
        if(window.confirm(`Are you sure you want to delete ${name}`))
        await axios.delete(`http://localhost:8081/api/customer/delete/${name}`);
        //history.push("/removecategory")
        
        dispatch({
            type: REMOVE_CATEGORY,
            payload: name
        })
    } catch (error) {
        
    }
}

export const addCategory = (category,history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8081/api/customer/category/add`,category);
        const res =await axios.get("http://localhost:8081/api/customer/category/all");
        history.push("/removecategory")
        
        dispatch({
            type: ADD_CATEGORY,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const addItem = (item,history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8081/api/customer/item/add`,item);
        //const res =await axios.get("http://localhost:8081/api/customer/category/all");
       // history.push("/removecategory")
        
        dispatch({
            type: ADD_ITEM,
            payload: {}
        })
    } catch (error) {
        
    }
}

export const getAllItem = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8081/api/customer/items/all`);
        //const res =await axios.get("http://localhost:8081/api/customer/category/all");
       // history.push("/removecategory")
        
        dispatch({
            type: GET_ALL_ITEM,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const removeItem = (itemName,history) => async dispatch => {
    try {
        await axios.delete(`http://localhost:8081/api/customer/items/all`);
        //const res =await axios.get("http://localhost:8081/api/customer/category/all");
       // history.push("/removecategory")
        
        dispatch({
            type: REMOVE_ITEM,
            payload: {}
        })
    } catch (error) {
        
    }
}
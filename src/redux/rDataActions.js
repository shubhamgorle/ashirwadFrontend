import { R_DETAILS_DATA_SUCCESS, R_DETAILS_DATA_REQUEST, R_DETAILS_DATA_FAIL,R_DELETE_DATA_FAIL, R_DELETE_DATA_REQUEST, R_DELETE_DATA_SUCCESS, R_GET_DATA_FAIL, R_GET_DATA_REQUEST, R_GET_DATA_SUCCESS, R_NEW_DATA_FAIL, R_NEW_DATA_REQUEST, R_NEW_DATA_SUCCESS, R_UPDATE_DATA_FAIL, R_UPDATE_DATA_REQUEST, R_UPDATE_DATA_SUCCESS } from "./rDataActionTypes"
import axios from 'axios'
export const createNewData = (formData) => async (dispatch, getState) => {
    try {
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        dispatch({ type: R_NEW_DATA_REQUEST })
        let { data } = await axios.post('/ashirwad/raulgaon/new', formData, config);
        dispatch({
            type: R_NEW_DATA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: R_NEW_DATA_FAIL,
            payload: error
        })
    }
}

export const getAllData = () => async (dispatch, getState) => {
    try {
       
        dispatch({ type: R_GET_DATA_REQUEST })
        let { data } = await axios.get('/ashirwad/raulgaon/get');
        dispatch({
            type: R_GET_DATA_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: R_GET_DATA_FAIL,
            payload: error
        })
    }
}

export const deleteData = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: R_DELETE_DATA_REQUEST })
        let { data } = await axios.delete(`/ashirwad/raulgaon/remove/${id}`);
        dispatch({
            type: R_DELETE_DATA_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: R_DELETE_DATA_FAIL,
            payload: false
        })
    }
}

export const UpdateData = (id, updatedData) => async (dispatch) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    try {
        dispatch({ type: R_UPDATE_DATA_REQUEST })
        let { data } = await axios.put(`/ashirwad/raulgaon/update/${id}`, updatedData, config);
        dispatch({
            type: R_UPDATE_DATA_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: R_UPDATE_DATA_FAIL,
            payload: false
        })
    }
}
export const getDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: R_DETAILS_DATA_REQUEST })
        let { data } = await axios.get(`/ashirwad/raulgaon/details/${id}`);
       
        dispatch({
            type: R_DETAILS_DATA_SUCCESS,
            payload: data.data
        })
        console.log(data.data)
    } catch (error) {
        dispatch({
            type:R_DETAILS_DATA_FAIL,
            payload: error
        })
    }
}

// /ashirwad/mendhepathar/details/671791775a25a503986371d8
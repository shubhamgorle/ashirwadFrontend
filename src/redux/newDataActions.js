import { NEW_DATA_SUCCESS, NEW_DATA_FAIL, NEW_DATA_REQUEST, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAIL, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, DELETE_DATA_FAIL, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS, UPDATE_DATA_FAIL, DETAILS_DATA_REQUEST, DETAILS_DATA_SUCCESS, DETAILS_DATA_FAIL } from "./newDataActionTypes";
import axios from 'axios'
export const createNewData = (formData) => async (dispatch, getState) => {
    try {
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        dispatch({ type: NEW_DATA_REQUEST })
        let { data } = await axios.post('/ashirwad/mendhepathar/new', formData, config);
        dispatch({
            type: NEW_DATA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_DATA_FAIL,
            payload: error
        })
    }
}

export const getAllData = () => async (dispatch, getState) => {
    try {
       
        dispatch({ type: GET_DATA_REQUEST })
        let { data } = await axios.get('/ashirwad/mendhepathar/get');
        dispatch({
            type: GET_DATA_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: GET_DATA_FAIL,
            payload: error
        })
    }
}

export const deleteData = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_DATA_REQUEST })
        let { data } = await axios.delete(`/ashirwad/mendhepathar/remove/${id}`);
        dispatch({
            type: DELETE_DATA_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_DATA_FAIL,
            payload: false
        })
    }
}

export const UpdateData = (id, updatedData) => async (dispatch) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    try {
        dispatch({ type: UPDATE_DATA_REQUEST })
        let { data } = await axios.put(`/ashirwad/mendhepathar/update/${id}`, updatedData, config);
        dispatch({
            type: UPDATE_DATA_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_DATA_FAIL,
            payload: false
        })
    }
}
export const getDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: DETAILS_DATA_REQUEST })
        let { data } = await axios.get(`/ashirwad/mendhepathar/details/${id}`);
       
        dispatch({
            type: DETAILS_DATA_SUCCESS,
            payload: data.data
        })
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DETAILS_DATA_FAIL,
            payload: error
        })
    }
}

// /ashirwad/mendhepathar/details/671791775a25a503986371d8
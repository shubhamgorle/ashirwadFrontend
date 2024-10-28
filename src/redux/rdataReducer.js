import { R_DETAILS_DATA_SUCCESS, R_DETAILS_DATA_REQUEST, R_DELETE_DATA_RESET, R_UPDATE_DATA_RESET,R_DETAILS_DATA_FAIL,R_DELETE_DATA_FAIL, R_DELETE_DATA_REQUEST, R_DELETE_DATA_SUCCESS, R_GET_DATA_FAIL, R_GET_DATA_REQUEST, R_GET_DATA_SUCCESS, R_NEW_DATA_FAIL, R_NEW_DATA_REQUEST, R_NEW_DATA_SUCCESS, R_UPDATE_DATA_FAIL, R_UPDATE_DATA_REQUEST, R_UPDATE_DATA_SUCCESS } from "./rDataActionTypes"

export const rnewDataReducer = ((state = { Entry: {} }, action) => {
    switch (action.type) {
        case R_NEW_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case R_NEW_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                Entry: action.payload
            }
        case R_NEW_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
})

export const rgetAllDataReducer = ((state = { AllData: [] }, action) => {
    switch (action.type) {
        case R_GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case R_GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                AllData: action.payload
            }
        case R_GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
})

export const rdeleteDataReducer = ((state = {}, action) => {
    switch (action.type) {
        case R_DELETE_DATA_REQUEST:
            case R_UPDATE_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case R_DELETE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
            case R_UPDATE_DATA_SUCCESS :
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case R_DELETE_DATA_FAIL:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
            case R_UPDATE_DATA_FAIL:
            return {
                ...state,
                loading: false,
                isUpdated: false,
            }
        case R_DELETE_DATA_RESET:
            return {
                ...state,
                isDeleted: false
            }
            case R_UPDATE_DATA_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        default:
            return state
    }
})

export const rdetailsDataReducer = ((state = { details: {} }, action) => {
    switch (action.type) {
        case R_DETAILS_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case R_DETAILS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                details: action.payload
            }
        case R_DETAILS_DATA_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        default:
            return state
    }
})
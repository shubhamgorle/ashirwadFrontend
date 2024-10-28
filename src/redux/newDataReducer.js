import { DELETE_DATA_FAIL, DELETE_DATA_REQUEST, DELETE_DATA_RESET, DELETE_DATA_SUCCESS, GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS, NEW_DATA_FAIL, NEW_DATA_REQUEST, NEW_DATA_SUCCESS, UPDATE_DATA_FAIL, UPDATE_DATA_REQUEST, UPDATE_DATA_RESET, UPDATE_DATA_SUCCESS, DETAILS_DATA_REQUEST, DETAILS_DATA_SUCCESS, DETAILS_DATA_FAIL} from "./newDataActionTypes";

export const newDataReducer = ((state = { Entry: {} }, action) => {
    switch (action.type) {
        case NEW_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                Entry: action.payload
            }
        case NEW_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
})

export const getAllDataReducer = ((state = { AllData: [] }, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                AllData: action.payload
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
})

export const deleteDataReducer = ((state = {}, action) => {
    switch (action.type) {
        case DELETE_DATA_REQUEST:
            case UPDATE_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
            case UPDATE_DATA_SUCCESS :
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case DELETE_DATA_FAIL:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
            case UPDATE_DATA_FAIL:
            return {
                ...state,
                loading: false,
                isUpdated: false,
            }
        case DELETE_DATA_RESET:
            return {
                ...state,
                isDeleted: false
            }
            case UPDATE_DATA_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        default:
            return state
    }
})

export const detailsDataReducer = ((state = { details: {} }, action) => {
    switch (action.type) {
        case DETAILS_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DETAILS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                details: action.payload
            }
        case DETAILS_DATA_FAIL:
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
import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from "../constants";

const INITIAL_STATE = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state, isLoggingIn: true, loginError: false,
            };
        case LOGIN_SUCCESS:
            return {
              ...state,isLoggingIn: false, isAuthenticated: true,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state, isLoggingIn: false, isAuthenticated: false, loginError: true,
            };
        case LOGOUT_REQUEST:
            return {
                ...state, isLoggingOut: true, logoutError: false,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state, isLoggingOut: false, isAuthenticated: false, user: {},
            };
        case LOGOUT_FAILURE:
            return{
                ...state, isLoggingOut: false, logoutError: true,
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        default:
            return state

    }
};

export default userReducer;
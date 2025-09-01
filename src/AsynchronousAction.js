
const redux = require('redux');
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware;
const { thunk } = require('redux-thunk');
const thunkMiddleware = thunk;

const axios = require('axios');

const InitialState = {
    loading: false,
    data: {},
    error: ""
}

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";    

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}   
const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}       
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: return {           
            ...state,
            loading: true
        }           
        case FETCH_USER_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ""   

        }
        case FETCH_USER_FAILURE: return {
            loading: false, 
            data: {},
            error: action.payload
        }       
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())   
        axios.get('https://jsonplaceholder.typicode.com/users2')
        .then(response => {
            const user = response.data;
            dispatch(fetchUserSuccess(user))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        })      
    }
}
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUser());    


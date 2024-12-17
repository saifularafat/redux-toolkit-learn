// async api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux thunk
// axios api fetch

const axios = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default; 

// Constants
const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_FAILED = 'GET_TODO_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Initial State
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
};

// Actions
const getTodosRequest = () => ({ type: GET_TODO_REQUEST });
const getTodosSuccess = (todos) => ({ type: GET_TODO_SUCCESS, payload: todos });
const getTodosFailed = (error) => ({ type: GET_TODO_FAILED, payload: error });

// Reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return { ...state, isLoading: true };
        case GET_TODO_SUCCESS:
            return { ...state, isLoading: false, todos: action.payload };
        case GET_TODO_FAILED:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

// Async Action (Thunk)
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios
            .get(API_URL)
            .then((res) => {
                dispatch(getTodosSuccess(res.data)); 
            })
            .catch((error) => {
                dispatch(getTodosFailed(error.message)); 
            });
    };
};

// Create Store with Middleware
const store = createStore(todosReducer, applyMiddleware(thunk));

// Subscribe to State Changes
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch the Async Action
store.dispatch(fetchData());

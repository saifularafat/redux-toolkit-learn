const { createStore } = require("redux");

// state 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialCounterState = {
    count: 0,
}

// ACTION - object - type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            state;
    }
}

// create store 
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch  action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());

store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
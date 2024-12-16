// state
// action = increment, decrement, reset
// reducer
// store

const { createStore } = require("redux")

// cart store
const GET_CARTS = 'GET_CARTS'
const ADD_CART = 'ADD_CART'

// CART state
const initialCartState = {
    carts: ['blog', 'post'],
    numberOfCarts: 2
}
// CART ACTION
const getCarts = () => {
    return {
        type: GET_CARTS,
    }
}
const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
    }
}

// CART reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CARTS:
            return {
                ...state,
            }
        case ADD_CART:
            return {
                carts: [...state.carts, action.payload],
                numberOfCarts: state.numberOfCarts + 1,
            }

        default:
            return state;
    }
};
// store
const store = createStore(cartReducer);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(getCarts());
store.dispatch(addCart('reel'));
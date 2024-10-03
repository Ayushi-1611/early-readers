import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// Define your initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

// Create a reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null, // Clear error on successful login
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload, // Set error on login failure
        isAuthenticated: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Create the Redux store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

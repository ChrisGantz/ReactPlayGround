import { createStore, applyMiddleware, combineReducers } from "redux";

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = createStore(reducer)


const store = createStore(
  (state = 5) => state
);

// change code below this line
const currentState = store.getState()
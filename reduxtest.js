const printStore = (store) => console.log('Store state now:', store.getState(), '\n');
const { createStore, combineReducers } = require('redux');

// Action type
const PRESS_BUTTON = 'PRESS_BUTTON';

// Action creator
const pressButton = () => ({ type: PRESS_BUTTON });

// Reducer
const initialState = { toggled: false };
const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESS_BUTTON:
      return { ...state, toggled: !state.toggled };
    default:
      return state
  }
}

/* Setup */
const store = createStore(combineReducers({ button: buttonReducer }));

// Print initial state of store
printStore(store);

// Print store state after any dispatched action
store.subscribe(() => printStore(store));

// Dispatch PRESS_BUTTON action every 5 seconds
setInterval(() => {
  console.log('Dispatching action:', pressButton());
  store.dispatch(pressButton());
}, 5000);

import { combineReducers } from 'redux';

import { reducer as drawer } from '../modules/NavigationDrawer';
import { reducer as err } from '../modules/ErrorSnackbar';
import { reducer as intl } from './intl';
import { reducers as restReducers } from './rest';

// Action type, action creator
const PRESS_BUTTON = 'PRESS_BUTTON';

// Reducer
const initialState = { toggled: false };
const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESS_BUTTON:
      return { ...state, toggled: !state.toggled };
    default:
      return state;
  }
};

const reducers = {
  // Example Redux toggle button state
  button: buttonReducer,

  // Navigation drawer state
  drawer,

  // Internationalization state
  intl,

  // Error snackbar component state
  err,

  // REST API endpoints' state
  ...restReducers,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;

import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore, LOCATION_CHANGE } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import apiMiddleware from './api/middleware';

//Middleware
const loggerMiddleware = createLogger({collapsed: true});

// import the root reducer
import rootReducer from './reducers/index';

// create an history object
const browserHistory = createHistory();

// create an object for the default data
const defaultState = {
  request: {
    initialLoading: true
  }
};

const middleware = [
  thunkMiddleware,
  routerMiddleware(browserHistory),
  promise(),
  loggerMiddleware,
  //(process.env.NODE_ENV === 'dev') && loggerMiddleware, // neat middleware that logs actions
  apiMiddleware
].filter(Boolean);

const createStoreWithHistory = () => {
  const store = createStore(rootReducer, defaultState, applyMiddleware(...middleware));

  const history = syncHistoryWithStore(browserHistory, store);
  return { store, history };
};

const store = createStoreWithHistory();

export default store;

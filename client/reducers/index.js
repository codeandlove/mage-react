import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {request} from '../api/middleware';
import {products} from './products';
import {media} from './media';

const rootReducer = combineReducers({
  request,
  products,
  media,
  routing: routerReducer
});

export default rootReducer;

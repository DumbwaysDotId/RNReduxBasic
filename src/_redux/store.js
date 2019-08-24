import { createStore, combineReducers, applyMiddleware } from 'redux';

import counter from '../_reducers/counter';
import { logger } from './middleware'

// this global states
const reducers = combineReducers({
  counter
})

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store
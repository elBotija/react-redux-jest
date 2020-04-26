import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'

const logger = store => next => action => {
  let result = next(action)
  return result
}

export default createStore(combineReducers(reducers), applyMiddleware(logger, thunk))
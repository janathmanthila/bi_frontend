import { createStore, applyMiddleware  } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from "./root_reducer";

const middlewares = []

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

middlewares.push(thunk);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

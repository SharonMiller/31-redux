import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/category';

import logger from './middleware/logger'

// Write some code using require-dir that dynamically creates this middleware array
let middleware = [logger];

export default () => createStore(reducer, applyMiddleware(...middleware))
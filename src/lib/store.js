import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/';

import logger from './middleware/logger'
import categoryValidator from './middleware/validator'

// Write some code using require-dir that dynamically creates this middleware array
// let middleware = [logger, categoryValidator];

export default () => createStore(
  reducer,
  applyMiddleware(
    logger,
    categoryValidator,
  ));
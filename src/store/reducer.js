import countreducer from './countreducer';
import logedreducer from './logedreducer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter:countreducer,
    logged:logedreducer
})

export default reducers;
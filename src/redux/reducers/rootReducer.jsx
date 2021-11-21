import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  student: studentReducer,
  modal: modalReducer,
});

export default rootReducer;

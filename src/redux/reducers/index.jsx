import { combineReducers } from 'redux';
import courses from './courseReducer.jsx';

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;

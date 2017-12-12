/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campusesReducer from './campusesReducer';
import studentReducer from './studentReducer';
import singleCampusReducer from './singleCampusReducer';

const initialState = {}

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusesReducer,
  singleCampus: singleCampusReducer
});

export default rootReducer

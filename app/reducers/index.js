/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campuses from './campusesReducer';
import students from './studentReducer';
import singleCampus from './singleCampusReducer';
import newStudent from './newStudentReducer';
import singleStudent from './singleStudentReducer'
import newCampus from './newCampusReducer';

const initialState = {}

const rootReducer = combineReducers({
  students,
  campuses,
  singleCampus,
  newStudent,
  singleStudent,
  newCampus
});

export default rootReducer;

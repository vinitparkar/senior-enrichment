import axios from 'axios';

//Action Types

const GET_STUDENTS = 'GET_STUDENTS';

//Action Creators
const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    };
};

//Thunk Action Creator
export const fetchStudents = () => {
    return function(dispatch) {
        axios.get('/api/students')
        .then(response => {dispatch(getStudents(response.data)); })
        .catch(console.error);
    }
};

//Reducer

const studentReducer = (state = [], action) => {
    
        switch(action.type){
            case GET_STUDENTS:
                return action.students;
            default:
                return state;
        }
    };
    
    export default studentReducer;

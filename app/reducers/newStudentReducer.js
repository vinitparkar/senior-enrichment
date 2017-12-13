import axios from 'axios';

//Action Types

const NEW_STUDENT = 'NEW_STUDENT';

//Action Creators
const newStudent = (newStudent) => {
    return {
        type: NEW_STUDENT,
        newStudent
    };
};

//Thunk Action Creator
export const saveNewStudent = (student, history) => {
    return function(dispatch) {
        axios.post(`/api/students`, student)
        .then(response => {dispatch(newStudent(response.data)); 
        history.push('/students'); })
        .catch(console.error);
    }
};

//Reducer

const newStudentReducer = (state = [], action) => {

    switch(action.type){
        case NEW_STUDENT:
            return action.newStudent;
        default:
            return state;
    }
};

export default newStudentReducer;


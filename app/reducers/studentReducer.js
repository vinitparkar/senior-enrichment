import axios from 'axios';

//Action Types

const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

//Action Creators
const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    };
};

const deleteStudent = (id) => {
    return {
        type: DELETE_STUDENT,
        id: id
    };
};

//Thunk Action Creator
export const fetchStudents = () => {
    return function(dispatch) {
        axios.get('/api/students')
        .then(response => {dispatch(getStudents(response.data)) })
        .catch(console.error);
    }
};

export const delStudent = (id) => {
    return function(dispatch) {
        axios.delete(`/api/students/${id}`)
        .then(dispatch(deleteStudent(id)) )
        .catch(console.error);
    }
}

//Reducer

const studentReducer = (state = [], action) => {
    
        switch(action.type){
            case GET_STUDENTS:
                return action.students;
            case DELETE_STUDENT:
                const newState = state.filter( (val) => {
                    return val.id !== parseInt(action.id); 
                });;
                return newState;
            default:
                return state;
        }
    };
    
    export default studentReducer;

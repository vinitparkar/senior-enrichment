import axios from 'axios';

//Action Types

const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';
const PUT_SINGLE_STUDENT = 'PUT_SINGLE_STUDENT';

//Action Creators
const getSingleStudent = (singleStudent) => {
    return {
        type: GET_SINGLE_STUDENT,
        singleStudent
    };
};

const updateSingleStudent = (singleStudent) => {
    return {
        type: PUT_SINGLE_STUDENT,
        singleStudent
    }
}

//Thunk Action Creator
export const fetchSingleStudent = (id) => {
    return function(dispatch) {
        axios.get(`/api/students/${id}`)
        .then(response => {dispatch(getSingleStudent(response.data)); })
        .catch(console.error);
    }
};

export const putSingleStudent = function (data, id, history) {
    return function(dispatch) {
        axios.put(`/api/students/${id}`,data)
        .then(response => {dispatch(updateSingleStudent(response.data));
        history.push('/students')})
        .catch(console.error);
    }
}

//Reducer

const singleStudentReducer = (state = [], action) => {

    switch(action.type){
        case GET_SINGLE_STUDENT:
            return [action.singleStudent];
        default:
            return state;
    }
};

export default singleStudentReducer;


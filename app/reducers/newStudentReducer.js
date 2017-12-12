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
export const saveNewStudent = (id) => {
    return function(dispatch) {
        axios.get(`/api/campuses/${id}`)
        .then(response => {dispatch(getSingleCampus(response.data)); })
        .catch(console.error);
    }
};

//Reducer

const singleCampusReducer = (state = [], action) => {

    switch(action.type){
        case GET_SINGLE_CAMPUS:
            return action.singleCampus;
        default:
            return state;
    }
};

export default singleCampusReducer;


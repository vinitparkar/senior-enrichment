import axios from 'axios';

//Action Types

const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

//Action Creators
const getSingleCampus = (singleCampus) => {
    return {
        type: GET_SINGLE_CAMPUS,
        singleCampus
    };
};

//Thunk Action Creator
export const fetchSingleCampus = (id) => {
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


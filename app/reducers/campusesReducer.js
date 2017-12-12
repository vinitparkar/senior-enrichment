import axios from 'axios';

//Action Types

const GET_CAMPUSES = 'GET_CAMPUSES';

//Action Creators
const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    };
};

//Thunk Action Creator
export const fetchCampuses = () => {
    return function(dispatch) {
        axios.get('/api/campuses')
        .then(response => {dispatch(getCampuses(response.data)); })
        .catch(console.error);
    }
};

//Reducer

const campusesReducers = (state = [], action) => {

    switch(action.type){
        case GET_CAMPUSES:
            return action.campuses;
        default:
            return state;
    }
};

export default campusesReducers;


import axios from 'axios';

//Action Types

const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_STUDENT';


//Action Creators
const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    };
};

const deleteCampus = (id) => {
    return {
        type: DELETE_CAMPUS,
        id: id
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

export const delCampus = (id) => {
    return function(dispatch) {
        axios.delete(`/api/campuses/${id}`)
        .then(dispatch(deleteCampus(id)) )
        .catch(console.error);
    }
}

//Reducer

const campusesReducers = (state = [], action) => {

    switch(action.type){
        case GET_CAMPUSES:
            return action.campuses;
        case DELETE_CAMPUS:
            const newState = state.filter( (val) => {
                return val.id !== parseInt(action.id); 
            });;
            return newState;
        default:
            return state;
    }
};

export default campusesReducers;


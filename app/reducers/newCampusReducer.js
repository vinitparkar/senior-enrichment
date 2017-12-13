import axios from 'axios';

//Action Types

const NEW_CAMPUS = 'NEW_CAMPUS';

//Action Creators
const newCampus = (newCampus) => {
    return {
        type: NEW_CAMPUS,
        newCampus
    };
};

//Thunk Action Creator
export const saveNewCampus = (campus, history) => {
    return function(dispatch) {
        axios.post(`/api/campuses`, campus)
        .then(response => {dispatch(newCampus(response.data)); 
        history.push('/campuses'); })
        .catch(console.error);
    }
};

//Reducer

const newCampusReducer = (state = [], action) => {

    switch(action.type){
        case NEW_CAMPUS:
            return action.newCampus;
        default:
            return state;
    }
};

export default newCampusReducer;
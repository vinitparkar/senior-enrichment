import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCampuses} from '../reducers/campusesReducer';
import {Link} from 'react-router-dom';
import {saveNewCampus} from '../reducers/newCampusReducer';


class Campuses extends Component {

    componentDidMount() {
        this.props.loadCampuses();
    }

    render() {
            return (
                <div id="all-campuses">
                    <Link to='/newcampus'> 
                        <button className="btn btn-success btn-xs">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </Link>
                    <ul>
                    {this.props.campuses.map(campus => (
                        <div className="col-xs-4" key={campus.id}>
                            <Link to={`/campuses/${campus.id}` } >
                            <img src={campus.imageUrl} />
                            <li>{campus.name}</li>
                            </Link>
                        </div>
                    ))}
                    </ul>
                </div> 
              );
        }
}


function mapStateToProps (storeState) {
    return {
        campuses: storeState.campuses
    };
}

function mapDispatchToProps (dispatch) {
    return {
        loadCampuses: function(){
            dispatch(fetchCampuses());
        }
    };
}

const campusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses);
export default campusesContainer;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCampuses} from '../reducers/campusesReducer';
import {Link} from 'react-router-dom';

class Campuses extends Component {

    componentDidMount() {
        this.props.loadCampuses();
    }

    render() {
            return (
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
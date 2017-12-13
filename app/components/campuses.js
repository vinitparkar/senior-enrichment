import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCampuses, delCampus} from '../reducers/campusesReducer';
import {Link, withRouter} from 'react-router-dom';
import {saveNewCampus} from '../reducers/newCampusReducer';


class Campuses extends Component {

    constructor(){
        super();
        
        this.removeCampus = this.removeCampus.bind(this);
    }

    removeCampus(event) {
        this.props.deleteCampus(event.target.value);
    }

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
                            <button className="btn btn-danger btn-sm" value={campus.id} onClick={this.removeCampus}>
                                <span className="glyphicon glyphicon-remove-sign"></span>
                            </button>
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
        },
        deleteCampus: function(id){
            dispatch(delCampus(id));
        }
    };
}

const campusesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Campuses));
export default campusesContainer;
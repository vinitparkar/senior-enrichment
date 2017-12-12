import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleCampus} from '../reducers/singleCampusReducer';
import store from '../store';


class SingleCampus extends Component {

    componentDidMount(){
        this.props.loadSingleCampus();
    }

    render() {
        const singleCampus = this.props.singleCampus;
        return (
            <div>
                <h2>{singleCampus.length > 0 && singleCampus[0].campus.name}</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {singleCampus && singleCampus.map((student) => {
                            //console.log(student.name);
                            <tr key={student.id}>
                                <td> {student.id} </td>
                                <td> {student.name} </td>
                            </tr>
                        })}
                
                    </tbody>
                </table>
            </div>
        );
    }
    
}

function mapStateToProps (storeState) {
    return {
        singleCampus: storeState.singleCampus
    };
}

function mapDispatchToProps (dispatch, ownProps) {
    return {
        loadSingleCampus: function(){
            dispatch(fetchSingleCampus(ownProps.match.params.campusId));
        }
    };
}

const singleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default singleCampusContainer;
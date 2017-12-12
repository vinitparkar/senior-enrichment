import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStudents} from '../reducers/studentReducer';

class Students extends Component {

    constructor(){
        super();
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    
    componentDidMount() {
        this.props.loadStudents();
    }

    deleteStudent() {

    }

    render() {
        const Students = this.props.students;
        return (
            <div>
                <Link to='/newstudent'> 
                    <button className="btn btn-danger btn-xs" onClick={this.componentDelete}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </Link>
                <table className='table'>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Campus</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {Students && Students.map(student => (
                    <tr key={student.id}>
                        <td> {student.id} </td>
                        <td> {student.name} </td>
                        <td> {student.campusId} </td>
                        <td>
                            <button className="btn btn-danger btn-xs" onClick={this.deleteStudent}>
                                <span className="glyphicon glyphicon-remove-sign"></span>
                            </button>
                        </td>

                    </tr>
                ))}
                
                </tbody>
                </table>
            </div>
          );
    }


}

function mapStateToProps (storeState) {
    return {
        students: storeState.students
    };
}

function mapDispatchToProps (dispatch) {
    return {
        loadStudents: function(){
            dispatch(fetchStudents());
        }
    };
}

const studentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);
export default studentsContainer;
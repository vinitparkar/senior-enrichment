import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {fetchStudents, delStudent} from '../reducers/studentReducer';

class Students extends Component {

    constructor(){
        super();
        
        this.removeStudent = this.removeStudent.bind(this);
    }
    
    componentDidMount() {
        this.props.loadStudents();
    }

    removeStudent(event) {
        this.props.deleteStudent(event.target.value);
    }

    render() {
        const Students = this.props.students;
        return (
            <div>
                <Link to='/newstudent'> 
                    <button className="btn btn-success btn-xs">
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </Link>
                <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Campus</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {Students && Students.map(student => (
                    <tr key={student.id}>
                        
                        <td> 
                            {student.id} 
                        </td>
                        <td> 
                            <Link to={`/students/${student.id}`}> {student.name} </Link> 
                        </td>
                        <td> 
                            <Link to={`/campuses/${student.campusId}`}>{student.campus.name} </Link> 
                        </td>

                        <td>
                            <button className="btn btn-danger btn-sm" value={student.id} onClick={this.removeStudent}>
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
        },
        deleteStudent: function(id){
            dispatch(delStudent(id));
        }
    };
}

const studentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
export default studentsContainer;
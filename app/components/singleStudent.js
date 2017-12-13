import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {fetchSingleStudent} from '../reducers/singleStudentReducer';
import {fetchCampuses} from '../reducers/campusesReducer';
import {putSingleStudent} from '../reducers/singleStudentReducer';


class SingleStudent extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            firstName: "",
            lastName: "",
            email: "",
            gpa: "",
            campusId: "",
            campuses: [],
            dirty: true
        }

        this.firstNameChange= this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.gpaChange = this.gpaChange.bind(this);
        this.campusChange = this.campusChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);        

    }

    firstNameChange(event){
        this.setState({firstName: event.target.value, dirty: false});
    }

    lastNameChange(event){
        this.setState({lastName: event.target.value, dirty: false});
    }

    emailChange(event){
        this.setState({email: event.target.value, dirty: false});
    }

    gpaChange(event){
        this.setState({gpa: event.target.value, dirty: false});
    }

    campusChange(event){
        this.setState({campusId: Number(event.target.value), dirty: false});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.updateSingleStudent(this.state, this.props.match.params.studentId, this.props.history);
    }

    componentDidMount() {
        this.props.loadSingleStudent();
        this.props.getCampuses();
    }

    render() {
        const singleStud = this.props.singleStudent;
        
        return (
            <div>
                <form className="form-control">

                    <h2> Student Details </h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>GPA</th>
                                <th>Campus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {singleStud.length >0 && singleStud.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.firstName} </td>
                                    <td>{student.lastName} </td>
                                    <td> {student.email} </td>
                                    <td>{student.gpa}  </td>
                                    <td> {student.campus.name} </td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                    <h2>Change the Necessary Details </h2>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td><input type="text" name="firstName" onChange={this.firstNameChange} />  </td>
                                <td><input type="text" name="lastName" onChange={this.lastNameChange}/>  </td>
                                <td><input type="text" name="email" onChange={this.emailChange}/>  </td>
                                <td><input type="text" name="gpa" onChange={this.gpaChange}/>  </td>
                                <td>
                                    <select onChange={this.campusChange}>
                                        <option value="Select Value"></option>
                                        {   this.props.campuses.map((campus) => (
                                                <option key={campus.id} value={campus.id}> {campus.name} </option>
                                        ))}
                                    </select> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button className="btn btn-default" type="submit" disabled={this.state.dirty} onClick={this.handleSubmit} > Submit</button>
            </div>
        );
    }
} 

function mapStateToProps (storeState) {
    return {
        singleStudent: storeState.singleStudent,
        campuses: storeState.campuses        
    };
}

function mapDispatchToProps (dispatch, ownProps) {
    return {
        loadSingleStudent: function(){
            dispatch(fetchSingleStudent(ownProps.match.params.studentId));
        },
        getCampuses: function(){
            dispatch(fetchCampuses());
        },
        updateSingleStudent: function (data, id, history) {
            dispatch(putSingleStudent(data, id, history))
        }
    };
}

const singleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));
export default singleStudentContainer;

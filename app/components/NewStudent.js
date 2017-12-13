import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {saveNewStudent} from '../reducers/newStudentReducer';
import {fetchCampuses} from '../reducers/campusesReducer';

class NewStudent extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: "",
            campusId: "",
            campuses: []
        }
        
        this.firstNameChange= this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.gpaChange = this.gpaChange.bind(this);
        this.campusChange = this.campusChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    firstNameChange(event){
        this.setState({firstName: event.target.value});
    }

    lastNameChange(event){
        this.setState({lastName: event.target.value});
    }

    emailChange(event){
        this.setState({email: event.target.value});
    }

    gpaChange(event){
        this.setState({gpa: event.target.value});
    }

    campusChange(event){
        this.setState({campusId: Number(event.target.value)});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.loadNewStudent(this.state, this.props.history);
    }

    componentDidMount(){
        this.props.getCampuses();
    }

    render() {
        const campuses = this.props.campuses;
        return (
            <form id="new-student-form" onSubmit={this.handleSubmit}>
                <div className="input-group input-group-lg">
                    <h3> Add Student </h3>
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={this.firstNameChange} />
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={this.lastNameChange}/>
                    <input type="text" className="form-control" name="email" placeholder="email" onChange={this.emailChange}/>
                    <input type="text" className="form-control" name="gpa" placeholder="GPA" onChange={this.gpaChange}/>
                    <select onChange={this.campusChange}>
                        <option value="">Select Campus</option>
                    {
                        campuses && campuses.map( campus => (
                            <option key={campus.id} value={campus.id}> {campus.name} </option>
                        ))
                    }
                    </select>
                    <button className="btn btn-default" type="submit">Submit</button>
                
                </div>
            </form>
        );
    }
}

function mapStateToProps (storeState) {
    return {
        newStudent: storeState.newStudent,
        campuses: storeState.campuses
    };
}

function mapDispatchToProps (dispatch) {
    return {
        loadNewStudent: function(student, history){
            dispatch(saveNewStudent(student, history));
        },
        getCampuses: function(){
            dispatch(fetchCampuses());
        }
    };
}

const campusesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewStudent));
export default campusesContainer;


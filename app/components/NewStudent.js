import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class NewStudent extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

    }

    render() {
    
        return (
            <form id="new-student-form" onSubmit={this.handleSubmit}>
                <div className="input-group input-group-lg">
                    <h3> Add Student </h3>
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" />
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" />
                    <input type="text" className="form-control" name="email" placeholder="email" />
                    <input type="text" className="form-control" name="gpa" placeholder="GPA" />
                    <button className="btn btn-default" type="submit">Submit</button>
                
                </div>
            </form>
        );
    }
}


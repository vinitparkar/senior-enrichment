import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {saveNewCampus} from '../reducers/newCampusReducer';

class NewCampus extends Component {
    
        constructor(props){
            super(props);
            this.state = {

                name: "",
                imageUrl: "",
                description: ""
            }
            
            this.name= this.name.bind(this);
            this.imageUrl = this.imageUrl.bind(this);
            this.description = this.description.bind(this);        
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        name(event){
            this.setState({name: event.target.value});
        }
    
        imageUrl(event){
            this.setState({imageUrl: event.target.value});
        }
    
        description(event){
            this.setState({description: event.target.value});
        }
    
        handleSubmit(event){
            event.preventDefault();
            this.props.loadNewCampus(this.state, this.props.history);
        }
    
        render() {
            const campuses = this.props.campuses;
            return (
                <form id="new-campus-form" onSubmit={this.handleSubmit}>
                    <div className="input-group input-group-lg">
                        <h3> Add Campus </h3>
                        <input type="text" className="form-control" name="name" placeholder="Campus Name" onChange={this.name} />
                        <input type="text" className="form-control" name="imageUrl" placeholder="Image Url" onChange={this.imageUrl}/>
                        <input type="text" className="form-control" name="description" placeholder="description" onChange={this.description}/>
                        <button className="btn btn-default" type="submit">Submit</button>
                    
                    </div>
                </form>
            );
        }
    }
    
    function mapStateToProps (storeState) {
        return {
            newCampus: storeState.newCampus
        };
    }
    
    function mapDispatchToProps (dispatch) {
        return {
            loadNewCampus: function(student, history){
                dispatch(saveNewCampus(student, history));
            }
        };
    }
    
    const campusesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCampus));
    export default campusesContainer;
    
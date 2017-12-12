import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Campuses from './campuses';
import Students from './students';
import NewStudent from './NewStudent';
//import SingleStudent from './singleStudent';
import SingleCampus from './singleCampus';
import Navbar from './Navbar';

export default class Main extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/campuses" component ={Campuses} />
                        <Route path="/campuses/:campusId" component={SingleCampus} />
                        <Route exact path="/students" component ={Students} />
                        <Route path='/newstudent' component = {NewStudent} />
                        {/* <Route path="/students/:students" component = {SingleStudent} /> */}
                        <Redirect to='/campuses' />
                    </Switch>
                </div>
            </Router>
        );
    }
}
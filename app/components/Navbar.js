import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav>
                <div id="menu">
                    <Link to="/campuses"> Home  </Link>
                    <Link to="/students"> Students  </Link>
                </div>
            </nav>
        );
    }

}

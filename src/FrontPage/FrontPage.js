import React, { Component } from 'react';
import Header from './Header.js'
import Welcome from './Welcome.js'
import About from './About.js'
import Dashboard from './Dashboard.js'
import FPLogin from './SignUp.js'

class FrontPage extends Component {

    /*
constructor (props) {
        super(props);

    }
*/
    render () {

        return (
		<div className="front-page" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
		<Header />
		<Welcome />
		<About />
		<Dashboard />
		<FPLogin />
		</div>


        );
    }
}


export default FrontPage;

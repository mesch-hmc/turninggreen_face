import React, { Component } from 'react';
import Header from './Header.js'
import Welcome from './Welcome.js'
import About from './About.js'
import Dashboard from './Dashboard.js'
import FPLogin from './SignUp.js'

const font = {
    fontFamily: "Arial, Helvetica, sans-serif"
};

class FrontPage extends Component {

    render () {

        return (
		<div className="front-page" style={font}>
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

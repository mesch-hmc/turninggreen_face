import React, { Component } from 'react';
import Header from './Header.js'
import Welcome from './Welcome.js'
import About from './About.js'
import Dashboard from './Dashboard.js'
import FPLogin from './SignUp.js'
import Footer from './Footer.js'

const frontPage = {
    
};

class FrontPage extends Component {

    render () {

        return (
		<div className="front-page" style={frontPage}>
		<Header />
		<Welcome />
		<About />
		<Dashboard />
		<FPLogin />
		<Footer />
		</div>


        );
    }
}


export default FrontPage;

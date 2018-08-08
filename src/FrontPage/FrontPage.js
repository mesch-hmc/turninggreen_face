import React, { Component } from 'react';

import Header from './Header.js'
import Welcome from './Welcome.js'
import About from './About.js'
import Dashboard from './Dashboard.js'
import FPLogin from './SignUp.js'
import Footer from './Footer.js'

class FrontPage extends Component {

    render () {

        return (
		<body>
		<Header />
		<Welcome />
		<About />
		<Dashboard />
		<FPLogin />
		<Footer />
		</body>
        );
    }
}


export default FrontPage;

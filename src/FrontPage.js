import React, { Component } from 'react';
import Header from './Header.js'
import FrontPageWelcome from './FrontPageWelcome.js'

class FrontPage extends Component {

    /*
constructor (props) {
        super(props);

    }
*/
    render () {
	var background = require('./test.jpg');
        return (
		<div className="front-page">
		<Header />
		//<FrontPageWelcome />

		</div>


        );
    }
}


export default FrontPage;

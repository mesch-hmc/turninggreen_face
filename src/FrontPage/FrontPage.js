import React, { Component } from 'react';
import FrontPageWelcome from './FrontPageWelcome.js'
import Header from './Header.js'

class FrontPage extends Component {

    /*
constructor (props) {
        super(props);

    }
*/
    render () {

        return (
		<div className="front-page">
		<Header />
		<FrontPageWelcome />

		</div>


        );
    }
}


export default FrontPage;

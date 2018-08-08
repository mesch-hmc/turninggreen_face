import React, { Component } from 'react';

class FrontPageWelcome extends Component {

    /*
constructor (props) {
        super(props);

    }
*/
    render () {
	var background = require('./test.jpg');
        return (
	    
//		<div style={{backgroundColor: "#44014C", width: "100%", minHeight: "200px"}}> Hello world! </div>
		<div style={{background: "url("+background+")", maxWidth: "100%", height: "700px", backgroundRepeat: "no-repeat"}}>
		PROJECT GREEN CHALLENGE
	    </div>


        );
    }
}


export default FrontPageWelcome;

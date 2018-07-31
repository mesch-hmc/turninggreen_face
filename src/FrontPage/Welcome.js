import React, { Component } from 'react';

class Welcome extends Component {

    render () {
	var img = require('./test.jpg');
        return (	    
		<div style={{backgroundImage: "url("+img+")", width:"100%", height: "800px", backgroundRepeat: "no-repeat"}} id="welcome">
		<div style={{position: "absolute", top:"300px", left: "100px", color: "#FFFFFF"}}>
		<h1> PROJECT GREEN CHALLENGE </h1>
		<h2> Some info </h2>
		</div>
		</div>
        );
    }
}


export default Welcome;

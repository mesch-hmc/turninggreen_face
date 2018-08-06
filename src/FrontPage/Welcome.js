import React, { Component } from 'react';

var img = require("./img/test.jpg");
const welcome = {
    backgroundImage: "url("+img+")",
    backgroundSize: "cover",
    width: "100%",
    height: "600px"
};

class Welcome extends Component {

    render () {
        return (	    
		<div style={welcome} id="welcome">
		<div style={{paddingTop:"300px", paddingLeft: "100px", color: "#FFFFFF"}}>
		<h1> PROJECT GREEN CHALLENGE </h1>
		<p> A Very motivational blurb about PGC </p>
		
		</div>
		</div>
        );
    }
}


export default Welcome;

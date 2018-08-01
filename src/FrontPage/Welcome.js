import React, { Component } from 'react';

var img = require("./img/test.jpg");
const welcome = {
    backgroundImage: "url("+img+")",
    width: "1500px",
    height: "800px",
    backgroundRepeat: "no-repeat"
};

class Welcome extends Component {

    render () {
        return (	    
		<div style={welcome} id="welcome">
		<div style={{paddingTop:"300px", paddingLeft: "100px", color: "#FFFFFF"}}>
		<h1> PROJECT GREEN CHALLENGE </h1>
		<p> More info </p>
		</div>
		</div>
        );
    }
}


export default Welcome;

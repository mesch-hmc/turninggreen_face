// needs Signup button
// or login

import React, {Component} from 'react';

class FPLogin extends Component{
    render(){
	var img = require("./fpTest.jpg");
	return(
		<div style={{backgroundImage:"url("+img+")", width:"100%", height: "600px", textAlign:"center", filter:"grayscale(50%)"}}>
		<h1> INTERESTED IN OUR MISSION? </h1>
		</div>
		);
    }
}

export default FPLogin;

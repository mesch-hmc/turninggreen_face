// needs Signup button
// or login

import React, {Component} from 'react';
var img = require("./img/sky.jpg");
const signup = {
    backgroundImage: "url("+img+")",
    width: "100%",
    height: "600px",
    textAlign: "center",
    padding: "30px"
};

class FPLogin extends Component{
    render(){
//	var img = require("./fpTest.jpg");
	return(
		<div style={signup} id="signup">
		<h1> INTERESTED IN OUR MISSION? </h1>
		</div>
		);
    }
}

export default FPLogin;

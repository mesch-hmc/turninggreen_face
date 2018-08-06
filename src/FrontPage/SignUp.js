// needs Signup button
// or login

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

var img = require("./img/sky.jpg");
const signup = {
    backgroundImage: "url("+img+")",
    maxWidth: "100%",
    height: "300px",
    textAlign: "center",
    padding: "50px"
};

const registerButton = {
    backgroundColor: "#EA3E38",
    width: "200px",
    height: "40px",
    display: "inline-block",
    textAlign: "center",
    color: "#FFFFFF",
    textDecoration: "none",
    lineHeight: "33px",
};

class FPLogin extends Component{
    render(){
	return(
		<div style={signup} id="signup">
		<br />
		<h1> INTERESTED IN OUR MISSION? </h1>
		<br />

	    {<Link to='/register' style={registerButton}>SIGN UP</Link>}
		<br />
		<br />
		Already have an account?
		{<Link to='/login'> Login here </Link>}
		</div>
		);
    }
}

export default FPLogin;

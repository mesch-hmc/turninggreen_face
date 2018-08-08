import React, {Component} from 'react';
import {Link} from 'react-router-dom';

var img = require("./img/sky.jpg");
const signup = {
    backgroundImage: "url("+img+")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "#000000",
    textAlign: "center"
};

const registerButton = {
    backgroundColor: "#EA3E38",
    width: "200px",
    height: "40px",
    display: "inline-block",
    textAlign: "center",
    color: "#FFFFFF",
    textDecoration: "none",
    lineHeight: "33px"
};

class FPLogin extends Component{
    render(){
	return(
		<div style={signup} id="signup" class="fullScreen">
		<div class="screenWrapper">
		<br />
		<h1> INTERESTED IN OUR MISSION? </h1>
		<br />

	    {<Link to='/register' style={registerButton}>SIGN UP</Link>}
		<br />
		<br />
		Already have an account?
		{<Link to='/login'> Login here </Link>}
	    </div>
		</div>
		);
    }
}

export default FPLogin;

// needs Signup button
// or login

import React, {Component} from 'react';

class FPLogin extends Component{
    render(){
	var img = require("./fpTest.jpg");
	return(
		<div style={{backgroundImage:"url("+img+")", width:"100%", height: "700px", textAlign:"center"}}>
		<h1> Interested in our mission? </h1>
		</div>
		);
    }
}

export default FPLogin;

import React, {Component} from 'react';

import {Link} from 'react-router-dom'

const about = {
    padding: "30px",
    width:"100%",
    height:"600px",
    textAlign: "center"
    };

class About extends Component {
    render(){
	return(
		<div style={about} id="about">
		<h1> ABOUT </h1>
		<h2> More info </h2>
		{<Link to='/'>FrontPage</Link>}
		</div>
	);
    }
}

export default About;

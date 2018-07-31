import React, {Component} from 'react';

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
		</div>
	);
    }
}

export default About;

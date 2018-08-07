import React, {Component} from 'react';

const aboutScreen = {
    color: "#000000",
    backgroundColor: "#FFFFFF"
}
const aboutContent = {
    textAlign: "center"
};

class About extends Component {
    render(){
	return(
		<div id="about" class="fullScreen" style={aboutScreen}>
		<div class="screenWrapper">
		<div class="screenContent" style={aboutContent}>
		<h3> ABOUT </h3>
		<br />
		<p> More info </p>
		</div>
		</div>
		</div>
	);
    }
}

export default About;

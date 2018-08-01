import React, {Component} from 'react';

const dash = {
    background: "#39465B",
    width: "100%",
    height: "600px",
    textAlign: "center",
    padding: "30px",
    color: "#FFFFFF"
};

class Dashboard extends Component {
    render(){
	// var img = require();
	return(
		<div style={dash} id="dashboard">
		<h1> Dashboard </h1>
		<h2> Something complicated... </h2>
		</div>
	);
    }
}

export default Dashboard;

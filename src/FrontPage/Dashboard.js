import React, {Component} from 'react';

const dash = {
    background: "#39465B",
    maxWidth: "100%",
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
		</div>
	);
    }
}

export default Dashboard;

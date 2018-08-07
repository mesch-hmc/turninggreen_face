import React, {Component} from 'react';

const dash = {
    backgroundColor: "#39465B",
    textAlign: "center"
};

class Dashboard extends Component {
    render(){
	// var img = require();
	return(
		<div id="dashboard" class="fullScreen" style={dash}>
		<div class="screenWrapper">
		<div class="screenContent">
		<h1> Dashboard </h1>
		</div>
		</div>
		</div>
	);
    }
}

export default Dashboard;

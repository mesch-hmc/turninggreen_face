import React, { Component } from 'react';

var img = require("./img/test.jpg");
const welcomeScreen = {
    backgroundImage: "url("+img+")",
    width: "100%",
    height: "600px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
};

class Welcome extends Component {

    render () {
        return (	    
		<div style={welcomeScreen} id="welcome" class="fullScreen">
		<div class="screenWrapper">
		<div class="screenContent">
		<h1> PROJECT GREEN CHALLENGE </h1>
		<p> A Very motivational blurb about PGC </p>
		</div>
		</div>
		</div>
        );
    }
}


export default Welcome;

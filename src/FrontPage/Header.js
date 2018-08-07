import React, { Component } from 'react';

import HeaderLink from './HeaderLink.js';

const hdr = {
    position: 'fixed',
    overflow: 'hidden',
    backgroundColor: '#7FA86F',
    width: '100%',
    height: "30px",
    padding:"30px",
    textShadow: "2px 2px 3px #779F6A"
};

class Header extends Component {
    render(){
	return (
	    	<div style={hdr}>
		<div style={{display: "inline-block", float: "right", maxWidth: "60%"}}>
		<HeaderLink value={"About"} link={"#about"} />

		<HeaderLink value={"Track My Footprint"} link={"#dashboard"} />
		<HeaderLink value={"Log in/Register"} link={"#signup"} />		

		<HeaderLink value={"Connect With Us"} link={"#socials"} />
		</div>
		</div>

	);
    }
}

export default Header;

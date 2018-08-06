import React, { Component } from 'react';

import HeaderLink from './HeaderLink.js';

const navbar = {
//    position: 'fixed',
//    overflow: 'hidden',
    backgroundColor: '#7FA86F',
    maxWidth: '100%',
    height: "50px",
    opacity: '50%',
    padding:"30px",
    textShadow: "2px 2px 3px #779F6A"
};

class Header extends Component {
    render(){
	return (
	    	<div id="navbar" style={navbar}>
		<HeaderLink value={"Connect With Us"} link={"#socials"} />
		<HeaderLink value={"Log in/Register"} link={"#signup"} />
		<HeaderLink value={"Track My Footprint"} link={"#dashboard"} />
		<HeaderLink value={"About"} link={"#about"} />
		</div>

	);
    }
}

export default Header;

import React, { Component } from 'react';

import HeaderLink from './HeaderLink.js';

const navbar = {
    position: 'fixed',
    overflow: 'hidden',
    backgroundColor: '#333',
    width: '100%',
    opacity: '100%'
};

class Header extends Component {
    render(){
	return (
	    	<div id="navbar" style={navbar}>
		<HeaderLink value={"Connect With Us"} link={"#connect"} />
		<HeaderLink value={"Log in/Register"} link={"#signup"} />
		<HeaderLink value={"Track My Footprint"} link={"#dashboard"} />
		<HeaderLink value={"About"} link={"#about"} />
		</div>

	);
    }
}

export default Header;

import React, { Component } from 'react';

const navbar = {
    position: 'fixed',
    overflow: 'hidden',
    backgroundColor: '#333',
    width: '100%'
};

const a = {
    float: 'left',
    display: 'block',
    textAlign: 'center',
    padding: '14px',
    color: '#FFFFFF'
};

class Header extends Component {
    render(){
	return (
		<div id="navbar" style={navbar}>
		<a href="#welcome" style = {a}>Home</a>
		<a href="#about" style = {a}>About</a>
		<a href="#dashboard" style = {a}> Track My Footprint </a>
		<a href="#signup" style = {a}> Log in/Register</a>
		<a href="#connect" style = {a}>Connect With Us </a>
		</div>

		// construct a bunch of buttons
	);
    }
}

export default Header;

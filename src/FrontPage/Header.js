import React, { Component } from 'react';
import HeaderButton from './HeaderButton.js'

class Header extends Component {
    render(){
	return (
	    // align left
		<div style={{backgroundOpacity:"0", position: "fixed", width:"100%", textAlign:"right", padding:"5px"}}>
		<HeaderButton value={"About"} />
		<HeaderButton value={"What/How"} />
		<HeaderButton value={"Login or Register"} />
		</div>
		// construct a bunch of buttons
	);
    }
}

export default Header;

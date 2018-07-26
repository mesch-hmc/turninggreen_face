import React, { Component } from 'react';
import HeaderButton from './HeaderButton.js'

class Header extends Component {
    render(){
	return (
	    // align left
	    <div className="buncha-buttons">
		<HeaderButton value={"About"} />
		<HeaderButton value={"What/How"} />
		<HeaderButton value={"Login or Register"} />
		</div>
		// construct a bunch of buttons
	);
    }
}

export default Header;

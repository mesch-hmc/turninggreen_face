import React, { Component } from 'react';

class HeaderButton extends Component {

    /*
construct(props){ // name to display, also eventually should take you to appropriate part of page...
	super(props);
	this.state={
	    name: props.value
	};
    }*/

    render(){
	return(
		<button className="header-button">
		{this.props.value}
	    </button>
	);
    }
}

export default HeaderButton;

import React, {Component} from 'react';

const norm = {
//    float: 'right',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '14px',
    color: '#FFFFFF',
    maxWidth: "25%"
};

const highlight={
//    float: 'right',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '14px',
    color: '#FFFFFF',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    maxWidth: "25%"
};

class HeaderLink extends Component {
    constructor(props){
	super(props);
	this.state={
	    hover: false,
	};
    }

    toggleHover (event){
	this.setState({ hover: !this.state.hover});
    }

    render(){
	var depends;
	if(this.state.hover){
	    depends = highlight;
	} else {
	    depends = norm;
	}
	return (
		<a style={depends} href={this.props.link} onMouseEnter={() => this.toggleHover()} onMouseLeave={() =>this.toggleHover()}> {this.props.value} </a>
	);
    }
}

export default HeaderLink;

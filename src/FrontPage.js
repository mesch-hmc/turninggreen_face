import React, { Component } from 'react';
//import './App.css';



class FrontPage extends Component {

    /*
constructor (props) {
        super(props);

    }
*/
    render () {
	var background = require('./test.jpg');
        return (
	    
//		<div style={{backgroundColor: "#44014C", width: "100%", minHeight: "200px"}}> Hello world! </div>
		<div style={{background: "url("+background+")", maxWidth: "100%", minHeight: "500px", backgroundRepeat: "no-repeat"}}>
	    </div>
//		<div style={{background: "url(" + background + ") center top no-repeat" }}>


        );
    }
}


export default FrontPage;

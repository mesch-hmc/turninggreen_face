import React, { Component } from 'react';
//import {Navbar, Nav, NavItem} from 'react-bootstrap';

import Routes from "./Routes";

import './App.css';
import './styles.css';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
	    isAuthenticated: false,
            userName: "",
            tip: "",
            desc: ""
        };
    }

    userHasAuthenticated = authenticated => {
	this.setState({ isAuthenticated: authenticated});
    }

    componentDidMount () {
        console.log("Fetching...");
	fetch("http://192.168.0.14:3000/tips_daily")
            .then(results => {
                console.log("Got json");
                return results.json();
            }).then(data => {
                    console.log(data.results);

                    let tip  = data.results.tip;
                    let desc = data.results.desc;
                
                
                    this.setState({tip : tip, desc : desc});
                    console.log("Tip: ",this.state.tip, " Desc: ",
                    this.state.desc);
                });
                
    }

    handleLogout = event => {
	this.userHasAuthenticated(false);
    }
    
    render () {
	const childProps={
	    isAuthenticated: this.state.isAuthenticated,
	    userHasAuthenticated: this.userHasAuthenticated
	};
        return (

		<div class="App container">
		<Routes childProps = {childProps}/>
		</div>

        );
    }
}

export default App;

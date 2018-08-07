import React, { Component } from 'react';
//import {Navbar, Nav, NavItem} from 'react-bootstrap';

import Routes from "./Routes";

import './App.css';
import './styles.css';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            userName: "",
            tip: "",
            desc: ""
        }
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

    render () {
        return (

		<div class="App container">
		<Routes />
		</div>

        );
    }
}

export default App;

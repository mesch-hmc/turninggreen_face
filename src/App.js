import React, { Component } from 'react';
import './App.css';
import FrontPage from './FrontPage/FrontPage.js';

import {Route, Link} from 'react-router-dom'

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            userName: "",
            tip: "",
            desc: ""
        }
    }
/*
    componentDidMount () {
        console.log("Fetching...");
        fetch("http://192.168.0.17:3000/tips_daily")
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
*/
    render () {
        return (
	    /*
                <div className="tip-of-the-day">
                <h2 id="tip-title"> Tip of the Day !</h2>
                    <p>  {this.state.tip}  </p>
                    <p>  {this.state.desc} </p>
                </div> */

		<div>
		<Route exact path="/" component={FrontPage} />
		{/*<Link to='/Front'>FrontPage</Link>*/}
		</div>

//                <div className="achievements">  </div>
        );
    }
}


export default App;

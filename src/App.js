import React, { Component } from 'react';
import './App.css';

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
        fetch("http://192.168.0.17:5000/")
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
            <div>
                <div className="tip-of-the-day">
                    <h2 id="tip-title"> Tip of the Day </h2>
                    <p>  {this.state.tip}  </p>
                    <p>  {this.state.desc} </p>
                </div>


                <div className="achievements">
                
                </div>
            </div>
        );
    }
}


export default App;

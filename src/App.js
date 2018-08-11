import React, { Component } from 'react';
import './App.css';
import FrontPage from './FrontPage/frontPage.js';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            userName: "",
            tip: "",
            desc: ""
        }
    }
    render () {
        return (
          <FrontPage />
        );
    }
}


export default App;

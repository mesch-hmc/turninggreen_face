import React, {Component} from 'react';

import {Link} from 'react-router-dom'

class LoginPage extends Component {
    render(){
	return (
		<div>
		<h1> log in here </h1>
		<Link to='/register'> here </Link>
		</div>
	);
    }
}

export default LoginPage;

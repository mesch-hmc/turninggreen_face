import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, FormControl} from 'react-bootstrap';

import {MenuBar} from './components/components.js';

import styles from './components/style.css';

class Form extends Component{
    render(){
	return(
		<div id={styles.loginScreen} className={styles.fullScreen}>
		<div id={styles.screenWrapper}>

		<div>
		<FormGroup bsClass={styles.form}>
		<FormControl autoFocus type="email" placeholder="email@example.com" />
		</FormGroup>

	    	<FormGroup>
		<FormControl type="password" placeholder="password"/>
		</FormGroup>
		</div>

	    <button> LOG IN </button>
		
		<br />
		Not registered? {<Link to='/register'> Create an account </Link>}
		</div>
		</div>
	);
    }
}

class LoginPage extends Component{
    render(){
	return(
		<div>
		<MenuBar />
		<Form />
		</div>
	);
    }
}

export default LoginPage;
    

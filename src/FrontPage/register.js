import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, FormControl} from 'react-bootstrap';
import {MenuBar, Welcome} from './components/components.js';

import styles from './components/style.css';

class RegistrationForm extends Component{
    constructor(props) {
	super(props);

	this.state = {
	    name: "",
	    email: "",
	    password: "",
	    confirmPassword: "",
	    newUser: null
	};
    }

    validateForm() {
	return (
	    this.state.email.length > 0 &&
		this.state.password.length > 0 &&
		this.state.password === this.state.confirmPassword
	);
    }

    renderForm(){
	return (
		<div> Already registered? {<Link to='/login'> Log in here </Link>}
		<br/>
		<form>
		<FormGroup controlId="name" bsSize="large">
		<FormControl
	    autoFocus
	    type="text"
	    placeholder="Name"
		/>
		</FormGroup>
		
		<FormGroup controlId="email" bsSize="large">
		<FormControl
            type="email"
	    placeholder="email@example.com"
            value={this.state.email}
            onChange={this.handleChange}
		/>
		</FormGroup>
		
		<FormGroup controlId="password" bsSize="large">
		<FormControl
	    value={this.state.password}
	    onChange={this.handleChange}
	    placeholder="confirm password"
	    type="password"
		/>
		</FormGroup>
		
		<FormGroup controlId="state" bsSize="large">
		<FormControl
	    componentClass="select"
	    type="state"
	    placeholder="State">
		<option vaule="State">State</option>
		<option value="Hawaii">Hawaii</option>
		</FormControl>
		</FormGroup>
		
		<FormGroup bsSize="large">
		<FormControl componentClass="select" placeholder="Country">
		<option value="country">Country</option>
		</FormControl>
		</FormGroup>
		
		<FormGroup controlId="birthday" bsSize="large">
		<FormControl placeholder="Birthday MM/DD/YYYY" />
		</FormGroup>
		
		<FormGroup controlId="extra" bsSize="large">
		<FormControl componentClass="textarea" placeholder="How did you hear about us?" />
		</FormGroup>
		
		<button>
		REGISTER
	    </button>
		</form>
		</div>
	);
    }

    render() {
	return (
		<div id={styles.loginScreen} className={styles.fullScreen}>
		<div id={styles.screenWrapper}>
		<div>
		{this.state.newUser === null
		 ? this.renderForm()
		 : this.renderConfirmationForm()}
	    </div>
		</div>
		</div>
	);
    }
}

class RegistrationPage extends Component{
    render(){
	return (
		<div>
		<MenuBar />
		<RegistrationForm />
		</div>
	);
    }
}

export default RegistrationPage;

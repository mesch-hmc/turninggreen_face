import React, { Component } from "react";
import { FormGroup, FormControl} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {Auth} from "aws-amplify";

import LoaderButton from './LoaderButton';
import Header from '../FrontPage/Header.js';
import "./Login.css";


const loginPage = {
    backgroundColor: "white",
    color: "black",
    textAlign: "center"
}

export default class Login extends Component {
  constructor(props) {
     super(props);

      this.state = {
	  isLoading: false,
	  email: "",
	  password: ""
      };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();

      this.setState({isLoading: true});
      try {
	  await Auth.signIn(this.state.email, this.state.password);
	  this.props.userHasAuthenticated(true);
	  this.props.history.push("/");
      } catch (e) {
	  alert(e.message);
	  this.setState({ isLoading: false });
      }
  }

  render() {
      return (
	      <body>
	      <Header/>
	      <div class="fullScreen" style={loginPage}>
	      <div class="screenWrapper">
	      <div className="Login">
	      
              <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
          onChange={this.handleChange}
	  placeholder="email@example.com"
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
          type="password"
	  placeholder="password"
            />
          </FormGroup>
	      <LoaderButton
	  block
	  bsSize="large"
	  disabled={!this.validateForm()}
	  type="submit"
	  isLoading={this.state.isLoading}
	  text="Login"
	  loadingText="Logging in…"
	  />
        </form>
	      </div>
	      Not registered? {<Link to='/register'> Create an account </Link>}
	  </div>
	      </div>
	      </body>
    );
  }
}

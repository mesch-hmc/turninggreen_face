import React from "react";
import {Route, Switch } from "react-router-dom";

import AppliedRoute from './AppliedRoute';
import FrontPage from './FrontPage/FrontPage.js';
import Login from './Login/Login.js';
import SignupPage from './Login/Signup.js';

export default ({childProps}) =>
    <Switch>
    <AppliedRoute exact path="/" component={FrontPage} props={childProps}/>
    <AppliedRoute exact path="/login" component={Login} props={childProps}/>
    <AppliedRoute exact path="/register" component={SignupPage} props={childProps}/>
    </Switch>;

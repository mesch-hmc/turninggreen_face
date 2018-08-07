import React from "react";
import {Route, Switch } from "react-router-dom";

import FrontPage from './FrontPage/FrontPage.js';
import Login from './Login/Login.js';
import RegisterPage from './Login/register.js';

export default () =>
    <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={RegisterPage} />
    </Switch>;

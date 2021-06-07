import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';
// import MainContainer from './main/main_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ServerContainer from './server/server_container';
import ServerItem from './server/server_item';
import NotFoundPage from './NotFoundPage'
// import 

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute exact path='/servers/' component={ServerContainer} />
      <ProtectedRoute path='/servers/:serverId' component={ServerItem} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404"/>
    </Switch>
  </div>
);

export default App;

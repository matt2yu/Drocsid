import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import HomeContainer from './home/home_container';
import MainContainer from './main/main_container';
import NotFoundPage from './NotFoundPage'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute path="/profile" component={UserProfile} /> */}
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute path="/servers/:serverId/channels/:channelId" component={MainContainer} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404"/>
    </Switch>
  </div>
);

export default App;

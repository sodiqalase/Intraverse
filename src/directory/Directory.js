import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../pages/landing-page/LandingPage'
import RegisterPage from '../pages/register-page/RegisterPage'
import LoginPage from '../pages/login-page/LoginPage'


function Directory() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  )
}

export default Directory

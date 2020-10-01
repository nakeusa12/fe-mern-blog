import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Register from '../../Pages/Register/Register'
// import Login from '../../Pages/Login/Login'
// import { MainApp } from '../../Pages/MainApp/MainApp'

import { MainApp, Login, Register } from "../../Pages"

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routes

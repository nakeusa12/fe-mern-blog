import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Register from '../../Pages/Register/Register'
import Login from '../../Pages/Login/Login'

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes

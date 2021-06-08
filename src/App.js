import React from 'react'
import {Main} from './screen/Main'
import {Login} from './screen/Login'
import App_css from './App.module.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

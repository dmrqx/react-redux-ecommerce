import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ROUTES from 'routes'
import 'css/index.css'

export default function App () {
  return (
    <h1>
      Hello React App
      <br />
      <br />
      <Router>
        <Switch>
          {ROUTES.map((props, i) => (
            <Route key={i} {...props} />
          ))}
        </Switch>
      </Router>
    </h1>
  )
}

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { CatalogProvider } from '@analogica/components/contexts'
import ROUTES from '@analogica/routes'
import '@analogica/css/index.css'

export default function App () {
  return (
    <CatalogProvider>
      <h1>Hello React App</h1>

      <Router>
        <Switch>
          {ROUTES.map((props, i) => (
            <Route key={i} {...props} />
          ))}
        </Switch>
      </Router>
    </CatalogProvider>
  )
}

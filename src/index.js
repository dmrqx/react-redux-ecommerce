import React from 'react'
import { render } from 'react-dom'

import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import App from '@analogica/components/App'
import Store from '@analogica/store'

const rootComponent = (
  <Store>
    <App />
  </Store>
)
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)

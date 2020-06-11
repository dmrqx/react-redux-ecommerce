import React from 'react'

import { CatalogProvider } from '@analogica/components/contexts'
import '@analogica/css/index.css'

export default function App () {
  return (
    <CatalogProvider>
      <h1>Hello React App</h1>
    </CatalogProvider>
  )
}

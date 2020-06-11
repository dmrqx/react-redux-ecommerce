import React, { useEffect, useState } from 'react'
import { node } from 'prop-types'

import catalogRequest from '@analogica/services/catalogRequest'
import CatalogContext from './'

const propTypes = {
  children: node.isRequired
}

const catalogInitialState = {
  status: 'idle',
  error: false,
  products: []
}

export default function CatalogProvider ({ children }) {
  const [catalog, setCatalog] = useState(catalogInitialState)

  useEffect(() => {
    async function fetchCatalog () {
      const payload = await catalogRequest()

      setCatalog(payload)
    }

    fetchCatalog()
  }, [])

  return (
    <CatalogContext.Provider value={catalog}>
      {children}
    </CatalogContext.Provider>
  )
}

CatalogProvider.propTypes = propTypes

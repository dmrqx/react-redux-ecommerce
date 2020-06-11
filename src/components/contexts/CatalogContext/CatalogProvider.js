import React, { useEffect } from 'react'
import { useDispatch as useReduxDispatch, useSelector } from 'react-redux'
import { node } from 'prop-types'

import { receiveCatalog, requestCatalog } from '@analogica/store/thunks'
import catalogRequest from '@analogica/services/catalogRequest'
import CatalogContext from './'

const propTypes = {
  children: node.isRequired
}

export default function CatalogProvider ({ children }) {
  const dispatch = useReduxDispatch()
  const catalog = useSelector(state => state.catalog)

  useEffect(() => {
    async function fetchCatalog () {
      const payload = await catalogRequest()

      dispatch(receiveCatalog({ ...payload }))
    }

    dispatch(requestCatalog())
    fetchCatalog()
  }, [dispatch])

  return (
    <CatalogContext.Provider value={catalog}>
      {children}
    </CatalogContext.Provider>
  )
}

CatalogProvider.propTypes = propTypes

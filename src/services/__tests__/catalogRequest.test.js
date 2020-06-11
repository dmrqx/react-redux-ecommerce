/**
 * @jest-environment jsdom
 */

import 'whatwg-fetch'

import catalogRequest, { CATALOG_API } from '../catalogRequest'
import catalogMock from '@analogica/__fakes__/catalog.json'

describe('catalogRequest', () => {
  const fetchMock = jest.spyOn(window, 'fetch')

  test('successfully request catalog from api', async () => {
    const catalog = await catalogRequest()

    fetchMock.mockResolvedValueOnce(() => ({
      ok: true,
      json: async () => catalogMock
    }))

    expect(fetchMock).toHaveBeenCalledWith(CATALOG_API.url, CATALOG_API.config)
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(catalog).toEqual({
      error: false,
      products: catalogMock
    })

    fetchMock.mockClear()
  })

  test('unsuccessfully request catalog from api', async () => {
    const WRONG_CATALOG_API = {
      ...CATALOG_API,
      url: 'http://fake.com'
    }

    const catalog = await catalogRequest(WRONG_CATALOG_API)

    fetchMock.mockResolvedValueOnce(() => ({
      ok: false
    }))

    expect(fetchMock).toHaveBeenCalledWith(
      WRONG_CATALOG_API.url,
      CATALOG_API.config
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(catalog).toEqual({
      error: {},
      products: []
    })

    fetchMock.mockRestore()
  })
})

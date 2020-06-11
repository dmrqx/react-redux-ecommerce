export const CATALOG_API = {
  url: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog',
  config: {
    method: 'GET',
    mode: 'cors'
  }
}

export default async function catalogRequest ({ url, config } = CATALOG_API) {
  try {
    const response = await window.fetch(url, config)

    if (response.ok) {
      const productsList = await response.json()

      return {
        error: false,
        products: [...productsList]
      }
    } else {
      const { statusText: message, status } = response

      return {
        error: {
          message,
          status
        },
        products: []
      }
    }
  } catch (error) {
    return error
  }
}

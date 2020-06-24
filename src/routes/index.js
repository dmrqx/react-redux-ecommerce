import {
  bagPath,
  catalogPath,
  productDetailPath,
  rootPath,
  searchPath
} from './route-names'

export default [
  {
    path: rootPath,
    exact: true,
    component: () => 'Página inicial'
  },
  {
    path: catalogPath,
    component: () => 'Catálogo de produtos'
  },
  {
    path: productDetailPath,
    component: () => 'Detalhe do produto'
  },
  {
    path: searchPath,
    component: () => 'Busca'
  },
  {
    path: bagPath,
    component: () => 'Sacola de compras'
  },
  {
    path: rootPath,
    component: () => 'Página não encontrada'
  }
]

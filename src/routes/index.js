import {
  Home,
  ProductDetail,
  ProductsList,
  Search,
  ShoppingBag
} from '@analogica/components/containers'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/novidades',
    component: ProductsList
  },
  {
    path: '/em-promocao',
    component: ProductsList
  },
  {
    path: '/produto',
    component: ProductDetail
  },
  {
    path: '/busca',
    component: Search
  },
  {
    path: '/sacola',
    component: ShoppingBag
  }
]

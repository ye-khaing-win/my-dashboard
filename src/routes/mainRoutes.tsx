import { RouteProps } from 'react-router-dom';
import ProductListPage from '../pages/sales/products/ProductListPage';
import ProductPage from '../pages/sales/products/ProductPage';

const mainRoutes: RouteProps[] = [
  {
    path: '/',
    element: <ProductListPage />,
  },
  {
    path: '/new',
    element: <ProductPage />,
  },
];

export default mainRoutes;

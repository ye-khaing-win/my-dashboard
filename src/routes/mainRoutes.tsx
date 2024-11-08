import { RouteProps } from 'react-router-dom';
import ProductListPage from '../pages/sales/products/ProductListPage';

const mainRoutes: RouteProps[] = [
  {
    path: '/',
    element: <ProductListPage />,
  },
];

export default mainRoutes;

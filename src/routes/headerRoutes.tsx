import { RouteProps } from 'react-router-dom';
import DefaultHeaderTemplate from '../templates/layouts/Headers/DefaultHeaderTemplate';

const headerRoutes: RouteProps[] = [
  {
    path: '*',
    element: <DefaultHeaderTemplate />,
  },
];

export default headerRoutes;

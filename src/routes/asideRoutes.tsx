import { RouteProps } from 'react-router-dom';
import { authPages } from '../config/pages.config';
import Sidenav from '../layouts/sidenav/Sidenav';

const asideRoutes: RouteProps[] = [
  { path: authPages.loginPage.to, element: null },
  { path: '*', element: <Sidenav /> },
];

export default asideRoutes;

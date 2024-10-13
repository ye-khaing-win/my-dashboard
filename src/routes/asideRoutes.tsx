import { RouteProps } from 'react-router-dom';
import { authPages } from '../config/pages.config';
import Navbar from '../layouts/navbar/Navbar';

const asideRoutes: RouteProps[] = [
  { path: authPages.loginPage.to, element: null },
  { path: '*', element: <Navbar /> },
];

export default asideRoutes;

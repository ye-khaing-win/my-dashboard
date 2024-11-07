import { RouteProps } from 'react-router-dom';
import { authPages } from '../config/pages.config';
import DefaultAsideTemplate from '../templates/layouts/Asides/DefaultAsideTemplate';

const asideRoutes: RouteProps[] = [
  { path: authPages.loginPage.to, element: null },
  { path: '*', element: <DefaultAsideTemplate /> },
];

export default asideRoutes;

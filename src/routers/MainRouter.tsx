import { Route, Routes } from 'react-router-dom';
import mainRoutes from '../routes/mainRoutes';

const MainRouter = () => {
  return (
    <Routes>
      {mainRoutes.map((routeProps) => (
        <Route key={routeProps.path} {...routeProps} />
      ))}
    </Routes>
  );
};

export default MainRouter;

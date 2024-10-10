import { Route, Routes } from 'react-router-dom';
import asideRoutes from '../routes/asideRoutes';

const AsideRouter = () => {
  return (
    <Routes>
      {asideRoutes.map((routeProp) => (
        <Route key={routeProp.path} {...routeProp} />
      ))}
    </Routes>
  );
};

export default AsideRouter;

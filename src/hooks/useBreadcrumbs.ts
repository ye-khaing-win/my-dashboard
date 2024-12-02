// import { useLocation } from 'react-router-dom';

const useBreadcrumbs = () => {
  //   const { pathname: location } = useLocation();
  const location = '/sales/products/list';
  const pathname = location.startsWith('/') ? location.slice(1) : location;

  const paths = pathname.split('/') || '';

  return { paths };
};

export default useBreadcrumbs;

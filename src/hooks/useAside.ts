import { useContext } from 'react';
import AsideContext from '../contexts/asideContext';

const useAside = () => {
  const context = useContext(AsideContext);

  if (!context) throw new Error();

  return context;
};

export default useAside;

import { useContext } from 'react';
import AsideCollapseContext from '../contexts/asideCollapseContext';

const useAsideCollapse = () => {
  const context = useContext(AsideCollapseContext);

  if (!context) throw new Error();

  return context;
};

export default useAsideCollapse;

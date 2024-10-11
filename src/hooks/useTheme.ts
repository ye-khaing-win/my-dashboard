import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error();

  return themeContext;
};

export default useTheme;

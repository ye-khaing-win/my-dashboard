import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import themeConfig from '../config/theme.config';
import { LocalStorageKey } from '../enums/localStorageKey.enum';

interface IThemeContextProps {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  asideCollapsed: boolean;
  setAsideCollapsed: Dispatch<SetStateAction<boolean>>;
}

interface IThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps,
);

export const ThemeContextProvider: FC<IThemeContextProviderProps> = (props) => {
  const { children } = props;

  /**
   * Aside collapse
   */

  const [asideCollapsed, setAsideCollapsed] = useState<boolean>(false);

  /**
   * Font size
   */
  const [fontSize, setFontSize] = useState<number>(() =>
    Number(
      localStorage.getItem(LocalStorageKey.FONT_SIZE) || themeConfig.fontSize,
    ),
  );

  useLayoutEffect(() => {
    localStorage.setItem(LocalStorageKey.FONT_SIZE, String(fontSize));
  }, [fontSize]);

  const value: IThemeContextProps = useMemo(
    () => ({
      fontSize,
      setFontSize,
      asideCollapsed,
      setAsideCollapsed,
    }),
    [fontSize, asideCollapsed],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

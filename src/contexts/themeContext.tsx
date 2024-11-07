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
import { TThemeMode } from '../types/themeMode.type';

interface IThemeContextProps {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  themeMode: TThemeMode | null;
  setThemeMode: Dispatch<SetStateAction<TThemeMode>>;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps,
);

export const ThemeProvider: FC<IThemeProviderProps> = (props) => {
  const { children } = props;

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

  /**
   * Theme mode
   */
  const [themeMode, setThemeMode] = useState<TThemeMode>(
    () =>
      (localStorage.getItem(LocalStorageKey.THEME_MODE) as TThemeMode) ||
      themeConfig.theme,
  );

  useLayoutEffect(() => {
    localStorage.setItem(LocalStorageKey.THEME_MODE, themeMode);

    if (
      localStorage.getItem('theme') === 'dark' ||
      (localStorage.getItem('theme') === 'system' &&
        window.matchMedia(`(prefers-color-scheme: dark)`).matches)
    ) {
      document.documentElement.classList.add('dark');
      setThemeMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setThemeMode('light');
    }
  }, [themeMode]);

  const value: IThemeContextProps = useMemo(
    () => ({
      fontSize,
      setFontSize,
      themeMode,
      setThemeMode,
    }),
    [fontSize, themeMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

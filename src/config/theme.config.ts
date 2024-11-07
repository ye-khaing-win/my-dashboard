import { TColorIntensity } from '../types/colorIntensities.type';
import { TColors } from '../types/colors.type';
import { TThemeMode } from '../types/themeMode.type';

type TThemeConfig = {
  transition: string;
  themeColor: TColors;
  themeColorShade: TColorIntensity;
  fontSize: 12 | 13 | 14 | 15 | 16 | 17 | 18;
  theme: TThemeMode;
};

const themeConfig: TThemeConfig = {
  transition: 'transition-all duration-300 ease-in-out',
  themeColor: 'blue',
  themeColorShade: '500',
  fontSize: 13,
  theme: 'light',
};

export default themeConfig;

import { TColorIntensity } from '../types/colorIntensities.type';
import { TColor } from '../types/color.type';
import { TThemeMode } from '../types/themeMode.type';
import { TBorderWidth } from '../types/borderWidth.type';
import { TRounded } from '../types/rounded.type';

type TThemeConfig = {
  transition: string;
  themeColor: TColor;
  themeColorShade: TColorIntensity;
  fontSize: 12 | 13 | 14 | 15 | 16 | 17 | 18;
  theme: TThemeMode;
  borderWidth: TBorderWidth;
  rounded: TRounded;
};

const themeConfig: TThemeConfig = {
  transition: 'transition-all duration-300 ease-in-out',
  themeColor: 'blue',
  themeColorShade: '500',
  fontSize: 13,
  theme: 'light',
  borderWidth: 'border-2',
  rounded: 'rounded-lg',
};

export default themeConfig;

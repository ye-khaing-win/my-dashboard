import theme from '../config/colors.config';
import themeConfig from '../config/theme.config';
import { TColor } from '../types/color.type';

const getColorPreset = (
  color: TColor = themeConfig.themeColor,
  themeMode: 'light' | 'dark' = 'light',
) => {
  const colorPreset = theme[themeMode][color];

  return colorPreset;
};

export default getColorPreset;

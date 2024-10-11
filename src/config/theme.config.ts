import { TColorIntensity } from '../types/common/colorIntensities.type';
import { TColors } from '../types/common/colors.type';

type TThemeConfig = {
  transition: string;
  themeColor: TColors;
  themeColorShade: TColorIntensity;
};

const themeConfig: TThemeConfig = {
  transition: 'transition-all duration-300 ease-in-out',
  themeColor: 'blue',
  themeColorShade: '500',
};

export default themeConfig;

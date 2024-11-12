import colorsConfig from '../config/colors.config';
import { TColor } from '../types/color.type';
import { TColorIntensity } from '../types/colorIntensities.type';

const getColor = (
  color: TColor,
  shade: TColorIntensity = '500',
): {
  bg: string;
  border: string;
  text: string;
} => {
  const colorConfig = colorsConfig[color];

  return {
    bg: colorConfig.bg[shade],
    border: colorConfig.border[shade],
    text: colorConfig.text[shade],
  };
};

export default getColor;

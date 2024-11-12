import { TColorIntensity } from '../types/colorIntensities.type';

const getColorIntensity = (shade: TColorIntensity | undefined) => {
  const colorShades: TColorIntensity[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
  ];

  const index = shade ? colorShades.indexOf(shade) : 5;
  const textColor = index <= 4 ? 'text-black' : 'text-white';

  const tintColorIntensity = colorShades[index - 1] || shade;
  const shadeColorIntensity = colorShades[index + 1] || shade;

  return { textColor, tintColorIntensity, shadeColorIntensity };
};

export default getColorIntensity;

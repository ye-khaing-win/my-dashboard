import themeConfig from '../config/theme.config';
import { TRounded } from '../types/rounded.type';

const getRoundedSize = (rounded: TRounded | undefined) => {
  const roundedSizes: TRounded[] = [
    'rounded-none',
    'rounded-sm',
    'rounded',
    'rounded-md',
    'rounded-lg',
    'rounded-xl',
    'rounded-2xl',
    'rounded-3xl',
    'rounded-full',
  ];

  const index = rounded
    ? roundedSizes.indexOf(rounded)
    : roundedSizes.indexOf(themeConfig.rounded);

  const roundedInner = roundedSizes[index - 1];
  const roundedOuter = roundedSizes[index - 1];

  const roundedCustom = (value: number) => roundedSizes[index + value];

  return { roundedInner, roundedOuter, roundedCustom };
};

export default getRoundedSize;

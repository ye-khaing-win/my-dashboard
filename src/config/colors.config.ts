// import { TColor } from '../types/color.type';
// import { TColorIntensity } from '../types/colorIntensities.type';

// type TColorShade = {
//   [key in TColorIntensity]: string;
// };

// type TColorConfig = {
//   bg: TColorShade;
//   border: TColorShade;
//   text: TColorShade;
// };

// type TColorsConfig = {
//   [key in TColor]: TColorConfig;
// };

const blue = {
  bg: {
    default: {
      tint: 'bg-blue-400',
      pure: 'bg-blue-500',
      shade: 'bg-blue-600',
      transparent: 'bg-blue-500/10',
    },
    hover: {
      tint: 'hover:bg-blue-400',
      pure: 'hover:bg-blue-500',
      shade: 'hover:bg-blue-600',
    },
    active: {
      tint: 'active:bg-blue-400',
      pure: 'active:bg-blue-500',
      shade: 'active:bg-blue-600',
    },
    focus: {
      tint: 'focus:bg-blue-400',
      pure: 'focus:bg-blue-500',
      shade: 'focus:bg-blue-600',
    },
  },
  border: {
    default: {
      tint: 'border-blue-400',
      pure: 'border-blue-500',
      shade: 'border-blue-600',
      transparent: 'border-blue-500/50',
    },
    hover: {
      tint: 'hover:border-blue-400',
      pure: 'hover:border-blue-500',
      shade: 'hover:border-blue-600',
    },
    active: {
      tint: 'active:border-blue-400',
      pure: 'active:border-blue-500',
      shade: 'active:border-blue-600',
    },
    focus: {
      tint: 'focus:border-blue-400',
      pure: 'focus:border-blue-500',
      shade: 'focus:border-blue-600',
    },
  },
};

const palette = {
  light: {
    blue,
  },
};

export default palette;

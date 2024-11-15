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
  text: {
    default: {
      tint: 'text-blue-400',
      pure: 'text-blue-500',
      shade: 'text-blue-600',
      transparent: 'text-blue-500/50',
    },
    hover: {
      tint: 'hover:text-blue-400',
      pure: 'hover:text-blue-500',
      shade: 'hover:text-blue-600',
    },
    active: {
      tint: 'active:text-blue-400',
      pure: 'active:text-blue-500',
      shade: 'active:text-blue-600',
    },
    focus: {
      tint: 'focus:text-blue-400',
      pure: 'focus:text-blue-500',
      shade: 'focus:text-blue-600',
    },
  },
};

const blueDark = {
  bg: {
    default: {
      tint: 'dark:bg-blue-400',
      pure: 'dark:bg-blue-500',
      shade: 'dark:bg-blue-600',
      transparent: 'dark:bg-blue-500/10',
    },
    hover: {
      tint: 'dark:hover:bg-blue-400',
      pure: 'dark:hover:bg-blue-500',
      shade: 'dark:hover:bg-blue-600',
    },
    active: {
      tint: 'dark:active:bg-blue-400',
      pure: 'dark:active:bg-blue-500',
      shade: 'dark:active:bg-blue-600',
    },
    focus: {
      tint: 'dark:focus:bg-blue-400',
      pure: 'dark:focus:bg-blue-500',
      shade: 'dark:focus:bg-blue-600',
    },
  },
  border: {
    default: {
      tint: 'dark:border-blue-400',
      pure: 'dark:border-blue-500',
      shade: 'dark:border-blue-600',
      transparent: 'dark:border-blue-500/50',
    },
    hover: {
      tint: 'dark:hover:border-blue-400',
      pure: 'dark:hover:border-blue-500',
      shade: 'dark:hover:border-blue-600',
    },
    active: {
      tint: 'dark:active:border-blue-400',
      pure: 'dark:active:border-blue-500',
      shade: 'dark:active:border-blue-600',
    },
    focus: {
      tint: 'dark:focus:border-blue-400',
      pure: 'dark:focus:border-blue-500',
      shade: 'dark:focus:border-blue-600',
    },
  },
  text: {
    default: {
      tint: 'dark:text-blue-400',
      pure: 'dark:text-blue-500',
      shade: 'dark:text-blue-600',
      transparent: 'dark:text-blue-500/50',
    },
    hover: {
      tint: 'dark:hover:text-blue-400',
      pure: 'dark:hover:text-blue-500',
      shade: 'dark:hover:text-blue-600',
    },
    active: {
      tint: 'dark:active:text-blue-400',
      pure: 'dark:active:text-blue-500',
      shade: 'dark:active:text-blue-600',
    },
    focus: {
      tint: 'dark:focus:text-blue-400',
      pure: 'dark:focus:text-blue-500',
      shade: 'dark:focus:text-blue-600',
    },
  },
};

const zinc = {
  bg: {
    default: {
      tint: 'bg-zinc-400',
      pure: 'bg-zinc-500',
      shade: 'bg-zinc-600',
      transparent: 'bg-zinc-500/10',
    },
    hover: {
      tint: 'hover:bg-zinc-400',
      pure: 'hover:bg-zinc-500',
      shade: 'hover:bg-zinc-600',
    },
    active: {
      tint: 'active:bg-zinc-400',
      pure: 'active:bg-zinc-500',
      shade: 'active:bg-zinc-600',
    },
    focus: {
      tint: 'focus:bg-zinc-400',
      pure: 'focus:bg-zinc-500',
      shade: 'focus:bg-zinc-600',
    },
  },
  border: {
    default: {
      tint: 'border-zinc-400',
      pure: 'border-zinc-500',
      shade: 'border-zinc-600',
      transparent: 'border-zinc-500/50',
    },
    hover: {
      tint: 'hover:border-zinc-400',
      pure: 'hover:border-zinc-500',
      shade: 'hover:border-zinc-600',
    },
    active: {
      tint: 'active:border-zinc-400',
      pure: 'active:border-zinc-500',
      shade: 'active:border-zinc-600',
    },
    focus: {
      tint: 'focus:border-zinc-400',
      pure: 'focus:border-zinc-500',
      shade: 'focus:border-zinc-600',
    },
  },
  text: {
    default: {
      tint: 'text-zinc-400',
      pure: 'text-zinc-500',
      shade: 'text-zinc-600',
      transparent: 'text-zinc-500/50',
    },
    hover: {
      tint: 'hover:text-zinc-400',
      pure: 'hover:text-zinc-500',
      shade: 'hover:text-zinc-600',
    },
    active: {
      tint: 'active:text-zinc-400',
      pure: 'active:text-zinc-500',
      shade: 'active:text-zinc-600',
    },
    focus: {
      tint: 'focus:text-zinc-400',
      pure: 'focus:text-zinc-500',
      shade: 'focus:text-zinc-600',
    },
  },
};

const zincDark = {
  bg: {
    default: {
      tint: 'dark:bg-zinc-400',
      pure: 'dark:bg-zinc-500',
      shade: 'dark:bg-zinc-600',
      transparent: 'dark:bg-zinc-500/10',
    },
    hover: {
      tint: 'dark:hover:bg-zinc-400',
      pure: 'dark:hover:bg-zinc-500',
      shade: 'dark:hover:bg-zinc-600',
    },
    active: {
      tint: 'dark:active:bg-zinc-400',
      pure: 'dark:active:bg-zinc-500',
      shade: 'dark:active:bg-zinc-600',
    },
    focus: {
      tint: 'dark:focus:bg-zinc-400',
      pure: 'dark:focus:bg-zinc-500',
      shade: 'dark:focus:bg-zinc-600',
    },
  },
  border: {
    default: {
      tint: 'dark:border-zinc-400',
      pure: 'dark:border-zinc-500',
      shade: 'dark:border-zinc-600',
      transparent: 'dark:border-zinc-500/50',
    },
    hover: {
      tint: 'dark:hover:border-zinc-400',
      pure: 'dark:hover:border-zinc-500',
      shade: 'dark:hover:border-zinc-600',
    },
    active: {
      tint: 'dark:active:border-zinc-400',
      pure: 'dark:active:border-zinc-500',
      shade: 'dark:active:border-zinc-600',
    },
    focus: {
      tint: 'dark:focus:border-zinc-400',
      pure: 'dark:focus:border-zinc-500',
      shade: 'dark:focus:border-zinc-600',
    },
  },
  text: {
    default: {
      tint: 'dark:text-zinc-400',
      pure: 'dark:text-zinc-500',
      shade: 'dark:text-zinc-600',
      transparent: 'dark:text-zinc-500/50',
    },
    hover: {
      tint: 'dark:hover:text-zinc-400',
      pure: 'dark:hover:text-zinc-500',
      shade: 'dark:hover:text-zinc-600',
    },
    active: {
      tint: 'dark:active:text-zinc-400',
      pure: 'dark:active:text-zinc-500',
      shade: 'dark:active:text-zinc-600',
    },
    focus: {
      tint: 'dark:focus:text-zinc-400',
      pure: 'dark:focus:text-zinc-500',
      shade: 'dark:focus:text-zinc-600',
    },
  },
};

const amber = {
  bg: {
    default: {
      tint: 'bg-amber-400',
      pure: 'bg-amber-500',
      shade: 'bg-amber-600',
      transparent: 'bg-amber-500/10',
    },
    hover: {
      tint: 'hover:bg-amber-400',
      pure: 'hover:bg-amber-500',
      shade: 'hover:bg-amber-600',
    },
    active: {
      tint: 'active:bg-amber-400',
      pure: 'active:bg-amber-500',
      shade: 'active:bg-amber-600',
    },
    focus: {
      tint: 'focus:bg-amber-400',
      pure: 'focus:bg-amber-500',
      shade: 'focus:bg-amber-600',
    },
  },
  border: {
    default: {
      tint: 'border-amber-400',
      pure: 'border-amber-500',
      shade: 'border-amber-600',
      transparent: 'border-amber-500/50',
    },
    hover: {
      tint: 'hover:border-amber-400',
      pure: 'hover:border-amber-500',
      shade: 'hover:border-amber-600',
    },
    active: {
      tint: 'active:border-amber-400',
      pure: 'active:border-amber-500',
      shade: 'active:border-amber-600',
    },
    focus: {
      tint: 'focus:border-amber-400',
      pure: 'focus:border-amber-500',
      shade: 'focus:border-amber-600',
    },
  },
  text: {
    default: {
      tint: 'text-amber-400',
      pure: 'text-amber-500',
      shade: 'text-amber-600',
      transparent: 'text-amber-500/50',
    },
    hover: {
      tint: 'hover:text-amber-400',
      pure: 'hover:text-amber-500',
      shade: 'hover:text-amber-600',
    },
    active: {
      tint: 'active:text-amber-400',
      pure: 'active:text-amber-500',
      shade: 'active:text-amber-600',
    },
    focus: {
      tint: 'focus:text-amber-400',
      pure: 'focus:text-amber-500',
      shade: 'focus:text-amber-600',
    },
  },
};

const amberDark = {
  bg: {
    default: {
      tint: 'dark:bg-amber-400',
      pure: 'dark:bg-amber-500',
      shade: 'dark:bg-amber-600',
      transparent: 'dark:bg-amber-500/10',
    },
    hover: {
      tint: 'dark:hover:bg-amber-400',
      pure: 'dark:hover:bg-amber-500',
      shade: 'dark:hover:bg-amber-600',
    },
    active: {
      tint: 'dark:active:bg-amber-400',
      pure: 'dark:active:bg-amber-500',
      shade: 'dark:active:bg-amber-600',
    },
    focus: {
      tint: 'dark:focus:bg-amber-400',
      pure: 'dark:focus:bg-amber-500',
      shade: 'dark:focus:bg-amber-600',
    },
  },
  border: {
    default: {
      tint: 'dark:border-amber-400',
      pure: 'dark:border-amber-500',
      shade: 'dark:border-amber-600',
      transparent: 'dark:border-amber-500/50',
    },
    hover: {
      tint: 'dark:hover:border-amber-400',
      pure: 'dark:hover:border-amber-500',
      shade: 'dark:hover:border-amber-600',
    },
    active: {
      tint: 'dark:active:border-amber-400',
      pure: 'dark:active:border-amber-500',
      shade: 'dark:active:border-amber-600',
    },
    focus: {
      tint: 'dark:focus:border-amber-400',
      pure: 'dark:focus:border-amber-500',
      shade: 'dark:focus:border-amber-600',
    },
  },
  text: {
    default: {
      tint: 'dark:text-amber-400',
      pure: 'dark:text-amber-500',
      shade: 'dark:text-amber-600',
      transparent: 'dark:text-amber-500/50',
    },
    hover: {
      tint: 'dark:hover:text-amber-400',
      pure: 'dark:hover:text-amber-500',
      shade: 'dark:hover:text-amber-600',
    },
    active: {
      tint: 'dark:active:text-amber-400',
      pure: 'dark:active:text-amber-500',
      shade: 'dark:active:text-amber-600',
    },
    focus: {
      tint: 'dark:focus:text-amber-400',
      pure: 'dark:focus:text-amber-500',
      shade: 'dark:focus:text-amber-600',
    },
  },
};

const palette = {
  light: {
    blue,
    zinc,
    amber,
  },
  dark: {
    blue: blueDark,
    zinc: zincDark,
    amber: amberDark,
  },
};

export default palette;

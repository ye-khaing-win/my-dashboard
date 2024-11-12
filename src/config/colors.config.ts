import { TColor } from '../types/color.type';
import { TColorIntensity } from '../types/colorIntensities.type';

type TColorShade = {
  [key in TColorIntensity]: string;
};

type TColorConfig = {
  bg: TColorShade;
  border: TColorShade;
  text: TColorShade;
};

type TColorsConfig = {
  [key in TColor]: TColorConfig;
};

const colorsConfig: TColorsConfig = {
  blue: {
    bg: {
      '50': 'bg-blue-50',
      '100': 'bg-blue-100',
      '200': 'bg-blue-200',
      '300': 'bg-blue-300',
      '400': 'bg-blue-400',
      '500': 'bg-blue-500',
      '600': 'bg-blue-600',
      '700': 'bg-blue-700',
      '800': 'bg-blue-800',
      '900': 'bg-blue-900',
      '950': 'bg-blue-950',
    },
    border: {
      '50': 'border-blue-50',
      '100': 'border-blue-100',
      '200': 'border-blue-200',
      '300': 'border-blue-300',
      '400': 'border-blue-400',
      '500': 'border-blue-500',
      '600': 'border-blue-600',
      '700': 'border-blue-700',
      '800': 'border-blue-800',
      '900': 'border-blue-900',
      '950': 'border-blue-950',
    },
    text: {
      '50': 'text-blue-50',
      '100': 'text-blue-100',
      '200': 'text-blue-200',
      '300': 'text-blue-300',
      '400': 'text-blue-400',
      '500': 'text-blue-500',
      '600': 'text-blue-600',
      '700': 'text-blue-700',
      '800': 'text-blue-800',
      '900': 'text-blue-900',
      '950': 'text-blue-950',
    },
  },
  amber: {
    bg: {
      '50': 'bg-amber-50',
      '100': 'bg-amber-100',
      '200': 'bg-amber-200',
      '300': 'bg-amber-300',
      '400': 'bg-amber-400',
      '500': 'bg-amber-500',
      '600': 'bg-amber-600',
      '700': 'bg-amber-700',
      '800': 'bg-amber-800',
      '900': 'bg-amber-900',
      '950': 'bg-amber-950',
    },
    border: {
      '50': 'border-amber-50',
      '100': 'border-amber-100',
      '200': 'border-amber-200',
      '300': 'border-amber-300',
      '400': 'border-amber-400',
      '500': 'border-amber-500',
      '600': 'border-amber-600',
      '700': 'border-amber-700',
      '800': 'border-amber-800',
      '900': 'border-amber-900',
      '950': 'border-amber-950',
    },
    text: {
      '50': 'text-amber-50',
      '100': 'text-amber-100',
      '200': 'text-amber-200',
      '300': 'text-amber-300',
      '400': 'text-amber-400',
      '500': 'text-amber-500',
      '600': 'text-amber-600',
      '700': 'text-amber-700',
      '800': 'text-amber-800',
      '900': 'text-amber-900',
      '950': 'text-amber-950',
    },
  },
  zinc: {
    bg: {
      '50': 'bg-zinc-50',
      '100': 'bg-zinc-100',
      '200': 'bg-zinc-200',
      '300': 'bg-zinc-300',
      '400': 'bg-zinc-400',
      '500': 'bg-zinc-500',
      '600': 'bg-zinc-600',
      '700': 'bg-zinc-700',
      '800': 'bg-zinc-800',
      '900': 'bg-zinc-900',
      '950': 'bg-zinc-950',
    },
    border: {
      '50': 'border-zinc-50',
      '100': 'border-zinc-100',
      '200': 'border-zinc-200',
      '300': 'border-zinc-300',
      '400': 'border-zinc-400',
      '500': 'border-zinc-500',
      '600': 'border-zinc-600',
      '700': 'border-zinc-700',
      '800': 'border-zinc-800',
      '900': 'border-zinc-900',
      '950': 'border-zinc-950',
    },
    text: {
      '50': 'text-zinc-50',
      '100': 'text-zinc-100',
      '200': 'text-zinc-200',
      '300': 'text-zinc-300',
      '400': 'text-zinc-400',
      '500': 'text-zinc-500',
      '600': 'text-zinc-600',
      '700': 'text-zinc-700',
      '800': 'text-zinc-800',
      '900': 'text-zinc-900',
      '950': 'text-zinc-950',
    },
  },
  red: {
    bg: {
      '50': 'bg-red-50',
      '100': 'bg-red-100',
      '200': 'bg-red-200',
      '300': 'bg-red-300',
      '400': 'bg-red-400',
      '500': 'bg-red-500',
      '600': 'bg-red-600',
      '700': 'bg-red-700',
      '800': 'bg-red-800',
      '900': 'bg-red-900',
      '950': 'bg-red-950',
    },
    border: {
      '50': 'border-red-50',
      '100': 'border-red-100',
      '200': 'border-red-200',
      '300': 'border-red-300',
      '400': 'border-red-400',
      '500': 'border-red-500',
      '600': 'border-red-600',
      '700': 'border-red-700',
      '800': 'border-red-800',
      '900': 'border-red-900',
      '950': 'border-red-950',
    },
    text: {
      '50': 'text-red-50',
      '100': 'text-red-100',
      '200': 'text-red-200',
      '300': 'text-red-300',
      '400': 'text-red-400',
      '500': 'text-red-500',
      '600': 'text-red-600',
      '700': 'text-red-700',
      '800': 'text-red-800',
      '900': 'text-red-900',
      '950': 'text-red-950',
    },
  },
  lime: {
    bg: {
      '50': 'bg-lime-50',
      '100': 'bg-lime-100',
      '200': 'bg-lime-200',
      '300': 'bg-lime-300',
      '400': 'bg-lime-400',
      '500': 'bg-lime-500',
      '600': 'bg-lime-600',
      '700': 'bg-lime-700',
      '800': 'bg-lime-800',
      '900': 'bg-lime-900',
      '950': 'bg-lime-950',
    },
    border: {
      '50': 'border-lime-50',
      '100': 'border-lime-100',
      '200': 'border-lime-200',
      '300': 'border-lime-300',
      '400': 'border-lime-400',
      '500': 'border-lime-500',
      '600': 'border-lime-600',
      '700': 'border-lime-700',
      '800': 'border-lime-800',
      '900': 'border-lime-900',
      '950': 'border-lime-950',
    },
    text: {
      '50': 'text-lime-50',
      '100': 'text-lime-100',
      '200': 'text-lime-200',
      '300': 'text-lime-300',
      '400': 'text-lime-400',
      '500': 'text-lime-500',
      '600': 'text-lime-600',
      '700': 'text-lime-700',
      '800': 'text-lime-800',
      '900': 'text-lime-900',
      '950': 'text-lime-950',
    },
  },
  sky: {
    bg: {
      '50': 'bg-sky-50',
      '100': 'bg-sky-100',
      '200': 'bg-sky-200',
      '300': 'bg-sky-300',
      '400': 'bg-sky-400',
      '500': 'bg-sky-500',
      '600': 'bg-sky-600',
      '700': 'bg-sky-700',
      '800': 'bg-sky-800',
      '900': 'bg-sky-900',
      '950': 'bg-sky-950',
    },
    border: {
      '50': 'border-sky-50',
      '100': 'border-sky-100',
      '200': 'border-sky-200',
      '300': 'border-sky-300',
      '400': 'border-sky-400',
      '500': 'border-sky-500',
      '600': 'border-sky-600',
      '700': 'border-sky-700',
      '800': 'border-sky-800',
      '900': 'border-sky-900',
      '950': 'border-sky-950',
    },
    text: {
      '50': 'text-sky-50',
      '100': 'text-sky-100',
      '200': 'text-sky-200',
      '300': 'text-sky-300',
      '400': 'text-sky-400',
      '500': 'text-sky-500',
      '600': 'text-sky-600',
      '700': 'text-sky-700',
      '800': 'text-sky-800',
      '900': 'text-sky-900',
      '950': 'text-sky-950',
    },
  },
  emerald: {
    bg: {
      '50': 'bg-emerald-50',
      '100': 'bg-emerald-100',
      '200': 'bg-emerald-200',
      '300': 'bg-emerald-300',
      '400': 'bg-emerald-400',
      '500': 'bg-emerald-500',
      '600': 'bg-emerald-600',
      '700': 'bg-emerald-700',
      '800': 'bg-emerald-800',
      '900': 'bg-emerald-900',
      '950': 'bg-emerald-950',
    },
    border: {
      '50': 'border-emerald-50',
      '100': 'border-emerald-100',
      '200': 'border-emerald-200',
      '300': 'border-emerald-300',
      '400': 'border-emerald-400',
      '500': 'border-emerald-500',
      '600': 'border-emerald-600',
      '700': 'border-emerald-700',
      '800': 'border-emerald-800',
      '900': 'border-emerald-900',
      '950': 'border-emerald-950',
    },
    text: {
      '50': 'text-emerald-50',
      '100': 'text-emerald-100',
      '200': 'text-emerald-200',
      '300': 'text-emerald-300',
      '400': 'text-emerald-400',
      '500': 'text-emerald-500',
      '600': 'text-emerald-600',
      '700': 'text-emerald-700',
      '800': 'text-emerald-800',
      '900': 'text-emerald-900',
      '950': 'text-emerald-950',
    },
  },
  violet: {
    bg: {
      '50': 'bg-violet-50',
      '100': 'bg-violet-100',
      '200': 'bg-violet-200',
      '300': 'bg-violet-300',
      '400': 'bg-violet-400',
      '500': 'bg-violet-500',
      '600': 'bg-violet-600',
      '700': 'bg-violet-700',
      '800': 'bg-violet-800',
      '900': 'bg-violet-900',
      '950': 'bg-violet-950',
    },
    border: {
      '50': 'border-violet-50',
      '100': 'border-violet-100',
      '200': 'border-violet-200',
      '300': 'border-violet-300',
      '400': 'border-violet-400',
      '500': 'border-violet-500',
      '600': 'border-violet-600',
      '700': 'border-violet-700',
      '800': 'border-violet-800',
      '900': 'border-violet-900',
      '950': 'border-violet-950',
    },
    text: {
      '50': 'text-violet-50',
      '100': 'text-violet-100',
      '200': 'text-violet-200',
      '300': 'text-violet-300',
      '400': 'text-violet-400',
      '500': 'text-violet-500',
      '600': 'text-violet-600',
      '700': 'text-violet-700',
      '800': 'text-violet-800',
      '900': 'text-violet-900',
      '950': 'text-violet-950',
    },
  },
};

export default colorsConfig;
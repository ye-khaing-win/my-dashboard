import classNames from 'classnames';
import themeConfig from '../../../config/theme.config';

export const navItemStyles = {
  default: classNames(
    'mb-2 p-3',
    'flex items-center',
    'grow',
    'cursor-pointer',
    'overflow-hidden',
    'rounded-xl',
    'border',
    'text-zinc-500',
    'hover:text-zinc-950 ',
    // 'dark:hover:text-zinc-100',
    themeConfig.transition,
  ),
  inactive: 'border-transparent',
  active:
    'border-zinc-300 text-zinc-950 dark:border-zinc-800 dark:text-zinc-100',
  here: 'text-zinc-950 dark:text-zinc-100 border-transparent',
};

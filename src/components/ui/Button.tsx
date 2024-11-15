import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import { TBorderWidth } from '../../types/borderWidth.type';
import { TColor } from '../../types/color.type';
import { TColorIntensity } from '../../types/colorIntensities.type';
import { TRounded } from '../../types/rounded.type';
import classNames from 'classnames';
import themeConfig from '../../config/theme.config';
import getColorIntensity from '../../utils/getColorIntensity';
import getColorPreset from '../../utils/getColorPreset';
import DuotoneIcon from '../icons/DuotoneIcon';

export type TButtonVariants = 'solid' | 'outline';
export type TButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  borderWidth?: TBorderWidth;
  children?: ReactNode;
  className?: string;
  color?: TColor;
  colorIntensity?: TColorIntensity;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  rounded?: TRounded;
  size?: TButtonSize;
  variant?: TButtonVariants;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    borderWidth = themeConfig.borderWidth,
    children,
    className,
    color = themeConfig.themeColor,
    colorIntensity = themeConfig.themeColorShade,
    isActive,
    isDisabled,
    isLoading = false,
    startIcon,
    endIcon,
    rounded = themeConfig.rounded,
    size = 'default',
    variant = 'solid',
    ...rest
  } = props;

  const { bg, border } = getColorPreset(color);

  const { textColor } = getColorIntensity(colorIntensity);

  const isIconButton = typeof children === 'undefined';

  /**
   * Variant
   */
  const buttonVariant: { [key in TButtonVariants]: string } = {
    solid: classNames(
      // Default
      { [bg.default.pure]: !isActive },
      [borderWidth, border.default.pure],
      [textColor],
      // Hover
      [bg.hover.shade, border.hover.shade],
      // Active
      [bg.active.shade, border.active.shade],
      {
        [bg.default.shade]: isActive,
        [border.default.shade]: isActive,
      },
    ),
    // Default
    outline: classNames(
      'bg-transparent',
      'text-black dark:text-white',
      borderWidth,
      {
        [border.default.transparent]: !isActive,
      },
      // Hover
      [border.hover.pure],
      // Active
      [border.active.pure],
      {
        [border.default.pure]: isActive,
      },
    ),
  };

  const buttonVariantStyles = buttonVariant[variant as TButtonVariants];

  /**
   * Size
   */

  const buttonSize: {
    [key in TButtonSize]: {
      general: string;
      startIcon: string;
      endIcon: string;
    };
  } = {
    xs: {
      general: classNames(
        {
          'px-3': !isIconButton,
          'px-0.5': isIconButton,
        },
        'py-0.5 text-xs',
      ),
      startIcon: classNames({ 'mr-1': !isIconButton }, 'text-[1.125rem]'),
      endIcon: classNames('ml-1', 'text-[1.125rem]'),
    },
    sm: {
      general: classNames(
        {
          'px-4': !isIconButton,
          'px-1': isIconButton,
        },
        'py-1',
        'text-sm',
      ),
      startIcon: classNames({ 'mr-1': !isIconButton }, 'text-[1.25rem]'),
      endIcon: classNames('ml-1', 'text-[1.25rem]'),
    },
    default: {
      general: classNames(
        {
          'px-5': !isIconButton,
          'px-1.5': isIconButton,
        },
        'py-1.5',
        'text-base',
      ),
      startIcon: classNames({ 'mr-1.5': !isIconButton }, 'text-[1.5rem]'),
      endIcon: classNames('ml-1.5', 'text-[1.5rem]'),
    },
    lg: {
      general: classNames(
        {
          'px-6': !isIconButton,
          'px-2': isIconButton,
        },
        'py-2',
        'text-lg',
      ),
      startIcon: classNames({ 'mr-2': !isIconButton }, 'text-[1.75rem]'),
      endIcon: classNames('ml-2', 'text-[1.75rem]'),
    },
    xl: {
      general: classNames(
        {
          'px-7': !isIconButton,
          'px-2.5': isIconButton,
        },
        'py-2.5',
        'text-xl',
      ),
      startIcon: classNames({ 'mr-2.5': !isIconButton }, 'text-[1.75rem]'),
      endIcon: classNames('ml-2.5', 'text-[1.75rem]'),
    },
  };

  const buttonSizeStyles = buttonSize[size].general;
  const buttonStartIconStyles = buttonSize[size].startIcon;
  const buttonEndIconStyles = !isIconButton
    ? buttonSize[size].endIcon
    : undefined;

  const buttonDisabledStyles = classNames('opacity-50', 'pointer-events-none');

  const styles = classNames(
    'inline-flex items-center justify-center',
    buttonVariantStyles,
    buttonSizeStyles,
    rounded,
    themeConfig.transition,
    { [buttonDisabledStyles]: isDisabled || isLoading },
    className,
  );

  return (
    <button
      ref={ref}
      data-component-name="Button"
      type="button"
      className={styles}
      {...rest}
    >
      {isLoading && (
        <DuotoneIcon
          icon="DuoLoading"
          className={classNames(buttonStartIconStyles, 'animate-spin')}
        />
      )}
      {startIcon &&
        !isLoading &&
        cloneElement(startIcon, {
          className: classNames(buttonStartIconStyles),
        })}
      {children}
      {endIcon &&
        cloneElement(endIcon, { className: classNames(buttonEndIconStyles) })}
    </button>
  );
});

export default Button;

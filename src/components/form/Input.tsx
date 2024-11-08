import { forwardRef, InputHTMLAttributes } from 'react';
import { IValidationBaseProps } from './Validation';
import { TBorderWidth } from '../../types/borderWidth.type';
import { TColor } from '../../types/color.type';
import { TColorIntensity } from '../../types/colorIntensities.type';
import { TRounded } from '../../types/rounded.type';
import classNames from 'classnames';
import themeConfig from '../../config/theme.config';

export type TInputVariant = 'solid';
export type TInputDimension = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
export type TInputType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Partial<IValidationBaseProps> {
  borderWidth?: TBorderWidth;
  color?: TColor;
  colorIntensity?: TColorIntensity;
  rounded?: TRounded;
  dimension?: TInputDimension;
  type?: TInputType;
  variant?: TInputVariant;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    borderWidth = themeConfig.borderWidth,
    className,
    color = themeConfig.themeColor,
    colorIntensity = themeConfig.themeColorShade,
    rounded = themeConfig.rounded,
    dimension = 'default',
    variant = 'solid',
    isValid,
    isTouched,
    invalidFeedback,
    ...rest
  } = props;

  console.log(colorIntensity);

  const inputVariants: {
    [key in TInputVariant]: { general: string; validation: string };
  } = {
    solid: {
      general: classNames(
        // Default
        `${borderWidth} border-zinc-100 dark:border-zinc-800`,
        'bg-zinc-100 dark:bg-zinc-800',
        // Hover
        `hover:border-${color}-${colorIntensity}`,
        `dark:hover:border-${color}-${colorIntensity}`,
        'disabled:!border-zinc-500',
        // Focus
        'focus:border-zinc-300 dark:focus:border-zinc-800',
        'focus:bg-transparent dark:focus:bg-transparent',
      ),
      validation: classNames({
        // '!border-red-500 ring-4 ring-red-500/30':
        //   !isValid && isTouched && invalidFeedback,
        '!border-green-500 focus:ring-4 focus:ring-green-500/30':
          !isValid && isTouched && !invalidFeedback,
      }),
    },
  };

  const inputDimension: { [key in TInputDimension]: { general: string } } = {
    xs: {
      general: classNames('px-1.5 py-0.5', 'text-xs'),
    },
    sm: {
      general: classNames('px-1.6 py-1', 'text-sm'),
    },
    default: {
      general: classNames('px-1.5 py-1.5', 'text-base'),
    },
    lg: {
      general: classNames('px-1.5 py-2', 'text-lg'),
    },
    xl: {
      general: classNames('px-1.5 py-2.5', 'text-xl'),
    },
  };

  const variantStyles = inputVariants[variant as TInputVariant].general;
  const validationStyles = inputVariants[variant as TInputVariant].validation;
  const dimensionStyles = inputDimension[dimension as TInputDimension].general;

  const styles = classNames(
    'w-full appearance-none outline-none',
    'text-black dark:text-white',
    'disabled:!opacity-25',
    themeConfig.transition,
    variantStyles,
    dimensionStyles,
    rounded,
    validationStyles,
    className,
  );

  return (
    <input ref={ref} data-component-name="Input" className={styles} {...rest} />
  );
});

export default Input;

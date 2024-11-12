import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { TBorderWidth } from '../../types/borderWidth.type';
import { TColor } from '../../types/color.type';
import { TColorIntensity } from '../../types/colorIntensities.type';
import { TIcon } from '../../types/icon.type';
import { TRounded } from '../../types/rounded.type';
import classNames from 'classnames';
import themeConfig from '../../config/theme.config';
import getColorIntensity from '../../utils/getColorIntensity';
import getColor from '../../utils/getColor';

export type TButtonVariants = 'solid' | 'outline' | 'default';
export type TButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  borderWidth?: TBorderWidth;
  children?: ReactNode;
  className?: string;
  color?: TColor;
  colorIntensity?: TColorIntensity;
  icon?: TIcon;
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
    color = 'blue',
    colorIntensity = themeConfig.themeColorShade,
    icon,
    isActive,
    isDisable,
    isLoading,
    rightIcon,
    rounded = themeConfig.rounded,
    size = 'default',
    variant = 'solid',
    ...rest
  } = props;

  const { bg, border } = getColor(color, colorIntensity);
  const { bg: bgAmber } = getColor('amber', '500');
  const { textColor } = getColorIntensity(colorIntensity);

  const buttonVariant: { [key in TButtonVariants]: string } = {
    solid: classNames(
      textColor,
      borderWidth,
      border,
      {
        [bg]: !isActive,
      },
      // `hover:${bgAmber}`,
    ),
    // Default
    outline: '',
    default: '',
  };

  const buttonVariantStyles = buttonVariant[variant as TButtonVariants];

  return (
    <button
      ref={ref}
      data-component-name="Button"
      className={buttonVariantStyles}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;

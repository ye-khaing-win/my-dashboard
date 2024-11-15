import { FC, HTMLAttributes, ReactNode } from 'react';
import { TBorderWidth } from '../../types/borderWidth.type';
import { TColor } from '../../types/color.type';
import { TColorIntensity } from '../../types/colorIntensities.type';
import { TRounded } from '../../types/rounded.type';
import getColorIntensity from '../../utils/getColorIntensity';
import classNames from 'classnames';
import getColorPreset from '../../utils/getColorPreset';
import themeConfig from '../../config/theme.config';

export type TBadgeVariants = 'solid' | 'outline' | 'default';

interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  borderWidth?: TBorderWidth;
  children: ReactNode;
  className?: string;
  color?: TColor;
  colorIntensity?: TColorIntensity;
  rounded?: TRounded;
  variant?: TBadgeVariants;
}

const Badge: FC<IBadgeProps> = (props) => {
  const {
    borderWidth = themeConfig.borderWidth,
    children,
    className,
    color = themeConfig.themeColor,
    colorIntensity = themeConfig.themeColorShade,
    rounded = themeConfig.rounded,
    variant = 'default',
    ...rest
  } = props;

  const { textColor } = getColorIntensity(colorIntensity);
  const { bg, border, text } = getColorPreset(color);

  const badgeVariant: { [key in TBadgeVariants]: string } = {
    solid: classNames([textColor], [bg.default.pure], 'border-transparent'),
    outline: classNames(
      [border.default.pure],
      [bg.default.transparent],
      [text.default.pure],
    ),
    default: classNames([text.default.pure], 'border-transparent'),
  };

  const badgeVariantStyles = badgeVariant[variant as TBadgeVariants];

  const styles = classNames(
    'inline-flex items-center justify-center',
    'px-2',
    borderWidth,
    rounded,
    badgeVariantStyles,
    className,
  );

  return (
    <div data-component-name="Badge" className={styles} {...rest}>
      {children}
    </div>
  );
};

export default Badge;

import classNames from 'classnames';
import { FC } from 'react';
import * as HiIcon from 'react-icons/hi';
import * as Hi2Icon from 'react-icons/hi2';
import { TIcon } from '../../types/icon.type';
import { THeroIcon } from '../../types/heroIcon.type';
import { THero2Icon } from '../../types/hero2Icon.type';

interface IIconProps {
  icon: TIcon;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: FC<IIconProps> = (props) => {
  const { icon, size, color, className } = props;

  /**
   * Hero icons
   */

  const HeroIconWrapper = HiIcon[icon as THeroIcon];

  if (typeof HeroIconWrapper === 'function') {
    return (
      <HeroIconWrapper
        data-component-name="HeroIcon"
        className={classNames(className)}
        size={size}
        color={color}
      />
    );
  }

  /**
   * Hero icons
   */
  const Hero2IconWrapper = Hi2Icon[icon as THero2Icon];

  if (typeof Hero2IconWrapper === 'function') {
    return (
      <Hero2IconWrapper
        data-component-name="Hero2Icon"
        className={classNames(className)}
        size={size}
        color={color}
      />
    );
  }

  return null;
};

export default Icon;
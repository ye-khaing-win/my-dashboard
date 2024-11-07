import classNames from 'classnames';
import { FC } from 'react';
import * as HiIcon from 'react-icons/hi';
import * as Hi2Icon from 'react-icons/hi2';
import { TIconName } from '../../types/iconName.type';
import { THeroIcon } from '../../types/heroIcon.type';
import { THero2Icon } from '../../types/hero2Icon.type';
import { TIconCollection } from '../../types/iconCollection.type';

interface IIconProps {
  collection: TIconCollection;
  name: TIconName;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: FC<IIconProps> = (props) => {
  const { collection, name, size, color, className } = props;

  /**
   * Hero icons
   */

  if (collection === 'hi') {
    const HeroIconWrapper = HiIcon[name as THeroIcon];

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
  }

  /**
   * Hero icons 2
   */
  if (collection === 'hi2') {
    const Hero2IconWrapper = Hi2Icon[name as THero2Icon];

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
  }

  return null;
};

export default Icon;

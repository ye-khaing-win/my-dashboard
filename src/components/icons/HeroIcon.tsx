import * as HiIcon from 'react-icons/hi';
import { FC, HTMLAttributes } from 'react';
import { THeroIcon } from '../../types/heroIcon.type';
import classNames from 'classnames';

interface IHeroIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: THeroIcon;
  className?: string;
}

const HeroIcon: FC<IHeroIconProps> = (props) => {
  const { icon, className } = props;

  const HeroIconWrapper = HiIcon[icon];

  if (typeof HeroIconWrapper === 'function') {
    return (
      <HeroIconWrapper
        data-component-name="HeroIcon"
        className={classNames('svg-icon', className)}
      />
    );
  }

  return null;
};

export default HeroIcon;

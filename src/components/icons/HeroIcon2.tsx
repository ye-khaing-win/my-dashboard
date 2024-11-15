import { HTMLAttributes, FC } from 'react';
import * as HiIcon2 from 'react-icons/hi2';
import { THeroIcon2 } from '../../types/heroIcon2.type';
import classNames from 'classnames';

interface IHeroIcon2Props extends HTMLAttributes<HTMLOrSVGElement> {
  icon: THeroIcon2;
  className?: string;
}

const HeroIcon2: FC<IHeroIcon2Props> = (props) => {
  const { icon, className } = props;

  const HeroIcon2Wrapper = HiIcon2[icon];

  if (typeof HeroIcon2Wrapper === 'function') {
    return (
      <HeroIcon2Wrapper
        data-component-name="HeroIcon"
        className={classNames('svg-icon', className)}
      />
    );
  }

  return null;
};

export default HeroIcon2;

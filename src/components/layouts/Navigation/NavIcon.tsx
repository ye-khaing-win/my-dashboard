import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import useAside from '../../../hooks/useAside';
import HeroIcon2 from '../../icons/HeroIcon2';
import { THeroIcon2 } from '../../../types/heroIcon2.type';

interface INavIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: THeroIcon2;
  className?: string;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { icon, className } = props;

  const { collapsed } = useAside();

  return (
    <HeroIcon2
      data-component-name="Nav/NavIcon"
      icon={icon}
      className={classNames(
        'flex-none text-2xl',
        {
          'me-3': !collapsed,
        },
        className,
      )}
    />
  );
};

export default NavIcon;

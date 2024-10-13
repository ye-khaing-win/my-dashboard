import { FC, HTMLAttributes } from 'react';

import HeroIcon from '../../icons/Icon';
import { TIcon } from '../../../types/icon.type';
import classNames from 'classnames';
import useTheme from '../../../hooks/useTheme';

interface INavIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: TIcon;
  className?: string;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { icon, className } = props;

  const { asideCollapsed } = useTheme();

  return (
    <HeroIcon
      data-component-name="Nav/NavIcon"
      icon={icon}
      className={classNames(
        'flex-none text-2xl',
        {
          'me-3': !asideCollapsed,
        },
        className,
      )}
    />
  );
};

export default NavIcon;

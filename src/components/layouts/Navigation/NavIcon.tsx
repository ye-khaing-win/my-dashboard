import { FC, HTMLAttributes } from 'react';

import Icon from '../../icons/Icon';
import { IIcon } from '../../../interfaces/icon.interface';
import classNames from 'classnames';
import useTheme from '../../../hooks/useTheme';

interface INavIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: IIcon;
  className?: string;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { icon, className } = props;

  const { asideCollapsed } = useTheme();

  return (
    <Icon
      data-component-name="Nav/NavIcon"
      name={icon.name}
      collection={icon.collection}
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

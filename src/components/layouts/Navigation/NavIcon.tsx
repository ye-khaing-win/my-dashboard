import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import useAside from '../../../hooks/useAside';
import Hero2Icon from '../../icons/Hero2Icon';
import { THero2Icon } from '../../../types/hero2Icon.type';

interface INavIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: THero2Icon;
  className?: string;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { icon, className } = props;

  const { collapsed } = useAside();

  return (
    <Hero2Icon
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

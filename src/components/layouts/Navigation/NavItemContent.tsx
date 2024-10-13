import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import useTheme from '../../../hooks/useTheme';

interface INavItemContentProps {
  children: ReactNode;
  className?: string;
}

const NavItemContent: FC<INavItemContentProps> = (props) => {
  const { children, className, ...rest } = props;

  const { asideCollapsed } = useTheme();

  return (
    <div
      data-component-name="Nav/NavItemContent"
      className={classNames(
        'flex w-full items-center justify-between truncate',
        {
          hidden: asideCollapsed,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavItemContent;

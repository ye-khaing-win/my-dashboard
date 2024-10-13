import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface INavItemTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const NavItemText: FC<INavItemTextProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Nav/NavItemText"
      className={classNames('truncate whitespace-nowrap', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavItemText;

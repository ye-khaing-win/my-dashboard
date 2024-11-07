import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface INavProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Nav: FC<INavProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <nav data-component-name="Nav" className={classNames(className)} {...rest}>
      {children}
    </nav>
  );
};

export default Nav;

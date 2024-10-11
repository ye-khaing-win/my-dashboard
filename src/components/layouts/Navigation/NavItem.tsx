import React, { FC, HTMLAttributes, ReactNode } from 'react';

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: any;
  text: string;
  to?: string;
  className?: string;
}

const NavItem: FC<NavItemProps> = (props) => {
  const { children, icon, text, to, className, ...rest } = props;
  return <div>NavItem</div>;
};

export default NavItem;

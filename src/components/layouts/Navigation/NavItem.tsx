import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import NavIcon from './NavIcon';
import NavItemContent from './NavItemContent';
import NavItemText from './NavItemText';
import { navItemStyles } from './styles';
import { THero2Icon } from '../../../types/hero2Icon.type';

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: THero2Icon;
  text: string;
  to?: string;
  className?: string;
  isActive?: boolean;
}

const NavItem: FC<NavItemProps> = (props) => {
  const { children, icon, text, to, className, isActive, ...rest } = props;

  const CONTENT = (
    <>
      {icon && <NavIcon icon={icon} />}
      <NavItemContent>
        <NavItemText>{text}</NavItemText>
        {children && <div>{children}</div>}
      </NavItemContent>
    </>
  );

  return (
    <li
      data-component-name="Nav/NavItem"
      className={classNames(
        'list-none overflow-hidden whitespace-nowrap',
        className,
      )}
      {...rest}
    >
      {to ? (
        <>
          {/* For Desktop */}

          <NavLink
            end
            to={to}
            className={({ isActive }) =>
              isActive
                ? classNames(
                    navItemStyles.default,
                    navItemStyles.here,
                    'max-md:hidden',
                  )
                : classNames(
                    navItemStyles.default,
                    navItemStyles.inactive,
                    'max-md:hidden',
                  )
            }
          >
            {CONTENT}
          </NavLink>
          {/* For Mobile */}
          <NavLink
            end
            to={to}
            className={({ isActive }) =>
              isActive
                ? classNames(
                    navItemStyles.default,
                    navItemStyles.here,
                    'md:hidden',
                  )
                : classNames(
                    navItemStyles.default,
                    navItemStyles.inactive,
                    'md:hidden',
                  )
            }
          >
            {CONTENT}
          </NavLink>
        </>
      ) : (
        <>
          {/* For Desktop */}
          <div
            role="presentation"
            className={
              isActive
                ? classNames(
                    navItemStyles.default,
                    navItemStyles.active,
                    'max-md:hidden',
                  )
                : classNames(
                    navItemStyles.default,
                    navItemStyles.inactive,
                    'max-md:hidden',
                  )
            }
          >
            {CONTENT}
          </div>
          {/* For Mobile */}
          <div
            className={
              isActive
                ? classNames(
                    navItemStyles.default,
                    navItemStyles.active,
                    'md:hidden',
                  )
                : classNames(
                    navItemStyles.default,
                    navItemStyles.inactive,
                    'md:hidden',
                  )
            }
          >
            {CONTENT}
          </div>
        </>
      )}
    </li>
  );
};

export default NavItem;

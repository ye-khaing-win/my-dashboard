import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import NavIcon from './NavIcon';
import { TIcon } from '../../../types/icon.type';
import NavItemContent from './NavItemContent';
import NavItemText from './NavItemText';
import themeConfig from '../../../config/theme.config';
import Icon from '../../icons/Icon';
import NavCollapse from './NavCollapse';

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon: TIcon;
  text: string;
  to?: string;
  className?: string;
  isActive?: boolean;
}

const styles = {
  default: classNames(
    'mb-2 p-3',
    'flex items-center',
    'grow',
    'cursor-pointer',
    'overflow-hidden',
    'rounded-xl',
    'border',
    'text-zinc-500',
    'hover:text-zinc-950 ',
    'dark:hover:text-zinc-100',
    themeConfig.transition,
  ),
  inactive: 'border-transparent',
  active:
    'border-zinc-300 text-zinc-950 dark:border-zinc-800 dark:text-zinc-100',
};

const NavItem: FC<NavItemProps> = (props) => {
  const { children, icon, text, to, className, isActive, ...rest } = props;

  const CONTENT = (
    <>
      <NavIcon icon={icon} />
      <NavItemContent>
        <NavItemText>{text}</NavItemText>
        {!to && (
          <div>
            <Icon
              icon="HiChevronDown"
              className={classNames(
                'text-2xl',
                { 'rotate-180': isActive },
                themeConfig.transition,
              )}
            />
          </div>
        )}
      </NavItemContent>
    </>
  );

  return (
    <li
      data-component-name="Nav/NavItem"
      className={classNames(
        'list-none items-center overflow-hidden whitespace-nowrap',
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
                ? classNames(styles.default, styles.active, 'max-md:hidden')
                : classNames(styles.default, styles.inactive, 'max-md:hidden')
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
                ? classNames(styles.default, styles.active, 'md:hidden')
                : classNames(styles.default, styles.active, 'md:hidden')
            }
          >
            {CONTENT}
          </NavLink>
        </>
      ) : (
        <>
          {/* For Desktop */}
          <div
            className={classNames(
              styles.default,
              styles.inactive,
              'max-md:hidden',
            )}
          >
            {CONTENT}
          </div>
          {children && <NavCollapse is={true}>{children}</NavCollapse>}
          {/* For Mobile */}
          <div
            className={classNames(styles.default, styles.inactive, 'md:hidden')}
          >
            {CONTENT}
          </div>
        </>
      )}
    </li>
  );
};

export default NavItem;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavIcon from './NavIcon';
import { IIcon } from '../../../interfaces/icon.interface';
import NavItemContent from './NavItemContent';
import NavItemText from './NavItemText';
import themeConfig from '../../../config/theme.config';
import Icon from '../../icons/Icon';
import NavCollapse from './NavCollapse';

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: IIcon;
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
  here: 'text-zinc-950 dark:text-zinc-100 border-transparent',
};

const NavItem: FC<NavItemProps> = (props) => {
  const { children, icon, text, to, className, isActive, ...rest } = props;
<<<<<<< HEAD
=======

  const [collapseShown, setCollapseShown] = useState(false);

  const handleShowCollapse = () => {
    setCollapseShown(!collapseShown);
  };

  const isCollapse = Boolean(children);
>>>>>>> a567f61a08eb680f039b19d15138179674257283

  const CONTENT = (
    <>
      {icon && <NavIcon icon={icon} />}
      <NavItemContent>
        <NavItemText>{text}</NavItemText>
<<<<<<< HEAD
        {!to && (
          <div>
            <Icon
              icon="HiChevronDown"
              className={classNames(
                'text-2xl',
                { 'rotate-180': isActive },
=======
        {isCollapse && (
          <div>
            <Icon
              collection="hi2"
              name="HiChevronDown"
              className={classNames(
                'text-2xl',
                {
                  'rotate-90': collapseShown,
                },
>>>>>>> a567f61a08eb680f039b19d15138179674257283
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
<<<<<<< HEAD
        'list-none items-center overflow-hidden whitespace-nowrap',
=======
        'list-none overflow-hidden whitespace-nowrap',
>>>>>>> a567f61a08eb680f039b19d15138179674257283
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
                ? classNames(styles.default, styles.here, 'max-md:hidden')
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
                ? classNames(styles.default, styles.here, 'md:hidden')
                : classNames(styles.default, styles.inactive, 'md:hidden')
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
                ? classNames(styles.default, styles.active, 'max-md:hidden')
                : classNames(styles.default, styles.inactive, 'max-md:hidden')
            }
            onClick={handleShowCollapse}
          >
            {CONTENT}
          </div>
          {children && <NavCollapse is={true}>{children}</NavCollapse>}
          {/* For Mobile */}
          <div
            className={
              isActive
                ? classNames(styles.default, styles.active, 'md:hidden')
                : classNames(styles.default, styles.inactive, 'md:hidden')
            }
            onClick={handleShowCollapse}
          >
            {CONTENT}
          </div>
        </>
      )}
      {isCollapse && (
        <NavCollapse isShown={collapseShown}>{children}</NavCollapse>
      )}
    </li>
  );
};

export default NavItem;

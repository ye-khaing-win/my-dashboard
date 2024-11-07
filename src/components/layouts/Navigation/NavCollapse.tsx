<<<<<<< HEAD
import { FC, ReactNode, HTMLAttributes } from 'react';
import { TIcon } from '../../../types/icon.type';
import classNames from 'classnames';
import NavIcon from './NavIcon';
import NavItemContent from './NavItemContent';
import NavItemText from './NavItemText';
import Icon from '../../icons/Icon';
import themeConfig from '../../../config/theme.config';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from '../../../hooks/useTheme';

interface INavCollapseProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  is: boolean;
  // icon: TIcon;
  // text: string;
  // to: string;
  // className?: string;
}

const NavCollapse: FC<INavCollapseProps> = (props) => {
  const { children, is } = props;

  // const location = useLocation();

  const { asideCollapsed } = useTheme();

  // const isActive = to !== '/' && location.pathname.includes(to);

  return (
    // <li
    //   data-component-name="Nav/NavCollapse"
    //   className={classNames('list-none overflow-hidden', className)}
    //   {...rest}
    // >
    //   <div role="presentation" className={classNames()} onClick={() => {}}>
    //     <NavIcon icon={icon} />

    //     <NavItemContent>
    //       <NavItemText>{text}</NavItemText>

    //       <div>
    //         <Icon
    //           icon="HiChevronDown"
    //           className={classNames(
    //             'text-2xl',
    //             { 'rotate-180': isActive },
    //             themeConfig.transition,
    //           )}
    //         />
    //       </div>
    //     </NavItemContent>
    //   </div>

    <AnimatePresence>
      {is && (
        <motion.ul
=======
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import useAsideCollapse from '../../../hooks/useAsideCollapse';

interface NavCollapseProps {
  isShown: boolean;
  children: ReactNode;
}

const NavCollapse: FC<NavCollapseProps> = (props) => {
  const { isShown, children } = props;

  const { collapsed } = useAsideCollapse();

  return (
    <AnimatePresence>
      {isShown && (
        <motion.ul
          key={'id'}
>>>>>>> a567f61a08eb680f039b19d15138179674257283
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 0 },
          }}
          transition={{ duration: 0.3 }}
<<<<<<< HEAD
          className={classNames(
            '!transition-margin !duration-300 !ease-in-out',
            {
              'ms-4': !asideCollapsed,
            },
          )}
=======
          className={classNames({
            'ml-4': !collapsed,
          })}
>>>>>>> a567f61a08eb680f039b19d15138179674257283
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
<<<<<<< HEAD
    // </li>
=======
>>>>>>> a567f61a08eb680f039b19d15138179674257283
  );
};

export default NavCollapse;

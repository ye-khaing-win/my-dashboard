import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactNode, useState } from 'react';
import useAside from '../../../hooks/useAside';
import { navItemStyles } from './styles';
import NavIcon from './NavIcon';
import NavItemContent from './NavItemContent';
import NavItemText from './NavItemText';
import themeConfig from '../../../config/theme.config';
import { THero2Icon } from '../../../types/hero2Icon.type';
import Hero2Icon from '../../icons/Hero2Icon';

interface NavCollapseProps {
  children: ReactNode;
  icon: THero2Icon;
  text: string;
  className?: string;
}

const NavCollapse: FC<NavCollapseProps> = (props) => {
  const { children, icon, text, className, ...rest } = props;

  const [isActive, setIsActive] = useState(false);

  const { collapsed } = useAside();

  return (
    <li
      data-component-name="Nav/NavCollapse"
      className={classNames('list-none overflow-hidden', className)}
      {...rest}
    >
      <div
        role="presentation"
        className={
          isActive
            ? classNames(navItemStyles.default, navItemStyles.here)
            : classNames(navItemStyles.default, navItemStyles.inactive)
        }
        onClick={() => setIsActive(!isActive)}
      >
        <NavIcon icon={icon} />
        <NavItemContent>
          <NavItemText>{text}</NavItemText>
          <div>
            <Hero2Icon
              icon="HiChevronDown"
              className={classNames(
                'text-2xl',
                { 'rotate-180': isActive },
                themeConfig.transition,
              )}
            ></Hero2Icon>
          </div>
        </NavItemContent>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.ul
            key={'id'}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={classNames({
              'ml-4': !collapsed,
            })}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavCollapse;

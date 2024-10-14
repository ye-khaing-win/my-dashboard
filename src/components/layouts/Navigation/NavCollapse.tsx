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
  );
};

export default NavCollapse;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import useAside from '../../../hooks/useAside';
import HeroIcon from '../../icons/HeroIcon';

interface HeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const HeaderLeft: FC<HeaderLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  const { collapsed, onToggle } = useAside();

  return (
    <div
      data-component-name="Header/HeaderLeft"
      className={classNames('flex items-center gap-4', 'md:mr-auto', className)}
      {...rest}
    >
      <button
        data-component-name="Aside/AsideCollapseButton"
        type="button"
        onClick={onToggle}
        className={classNames(
          'flex items-center justify-center',
          'h-12 w-12',
          'md:hidden',
        )}
      >
        <HeroIcon
          icon={collapsed ? 'HiOutlineMenu' : 'HiOutlineMenuAlt2'}
          className="text-2xl"
        />
      </button>
      {children}
    </div>
  );
};

export default HeaderLeft;

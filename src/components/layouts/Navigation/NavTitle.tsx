import { FC, HTMLAttributes } from 'react';
import useTheme from '../../../hooks/useTheme';
import classNames from 'classnames';

interface INavTitleProps extends HTMLAttributes<HTMLLIElement> {
  children: string;
  className?: string;
}

const NavTitle: FC<INavTitleProps> = (props) => {
  const { children, className, ...rest } = props;

  const { asideCollapsed } = useTheme();

  return (
    <li
      data-component-name="Nav/NavTitle"
      className={classNames(
        'list-none truncate',
        'px-3 py-1.5',
        'font-semibold',
        'text-sm text-zinc-500',
        className,
      )}
      {...rest}
    >
      {asideCollapsed ? (
        <div className="my-1.5 h-2 w-full max-w-[6rem] rounded-full bg-zinc-500" />
      ) : (
        children
      )}
    </li>
  );
};

export default NavTitle;
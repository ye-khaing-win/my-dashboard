import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

interface INavSeparatorProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
}

const NavSeparator: FC<INavSeparatorProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <li
      data-component-name="Nav/NavSeparator"
      className={classNames(
        'mb-2 list-none rounded-full border-b border-zinc-500/25',
        className,
      )}
      {...rest}
    />
  );
};

export default NavSeparator;

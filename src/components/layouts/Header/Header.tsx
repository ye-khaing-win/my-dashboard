import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode, useRef } from 'react';
import useDomRect from '../../../hooks/useDomRect';

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Header: FC<IHeaderProps> = (props) => {
  const { children, className, ...rest } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const [domRect] = useDomRect(divRef);

  return (
    <>
      <style>{`:root { --header-height: ${domRect?.height || 0}px}`}</style>
      <header
        ref={divRef}
        data-component-name="Header"
        className={classNames(
          'sticky top-0 z-10',
          'flex justify-between gap-4',
          'border-b border-zinc-300/25 bg-white/75',
          // 'p-6',
          'p-10',
          'backdrop-blur-md',
          // 'dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white',
          className,
        )}
        {...rest}
      >
        {children}
      </header>
    </>
  );
};

export default Header;

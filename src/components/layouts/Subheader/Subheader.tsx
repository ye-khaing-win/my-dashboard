import classNames from 'classnames';
import { FC, ReactNode, useRef } from 'react';
import useDomRect from '../../../hooks/useDomRect';

interface ISubheaderProps {
  children: ReactNode;
  className?: string;
}

const Subheader: FC<ISubheaderProps> = (props) => {
  const { children, className, ...rest } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const [domRect] = useDomRect(divRef);

  return (
    <>
      <style>{`:root {--subheader-height: ${domRect?.height || 0}px}`}</style>
      <div
        ref={divRef}
        data-component-name="Subheader"
        className={classNames(
          'sticky',
          'top-[var(--header-height)] z-[9]',
          'flex flex-wrap justify-between gap-4',
          'mb-6 px-6 py-4',
          'backdrop-blur-md',
          // 'bg-transparent',
          // 'border-b border-zinc-300/25 bg-white/75',
          //   'dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </>
  );
};

export default Subheader;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import themeConfig from '../../../config/theme.config';
import useAside from '../../../hooks/useAside';

interface IAsideProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Aside: FC<IAsideProps> = (props) => {
  const { children, className, ...rest } = props;

  const { collapsed, onMouseEnter, onMouseLeave } = useAside();

  return (
    <aside
      data-component-name="Aside"
      className={classNames(
        'peer',
        'fixed bottom-0 top-0 z-30 md:z-20',
        'flex flex-col',
        'border-r border-zinc-300/25 bg-white',
        'py-6',
        // 'dark:border-zinc-800/50 dark:bg-zinc-900 dark:text-white',
        themeConfig.transition,
        className,
        // Mobile Design
        'max-md:-left-[20rem] max-md:w-[20rem]',
        {
          'md:w-[20rem]': !collapsed,
          'md:w-[6.225em]': collapsed,
        },
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </aside>
  );
};

export default Aside;

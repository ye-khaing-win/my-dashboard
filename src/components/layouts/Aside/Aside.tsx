import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import themeConfig from '../../../config/theme.config';

interface IAsideProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Aside: FC<IAsideProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <aside
      data-component-name="Aside"
      className={classNames(
        'peer',
        'fixed bottom-0 top-0 z-30 md:z-20',
        'flex flex-col',
        'border-l border-zinc-300/25 bg-white',
        'py-6',
        'dark:border-zinc-800/50 dark:bg-zinc-900 dark:text-white',
        themeConfig.transition,
        className,
        // Mobile Design
      )}
      {...rest}
    >
      {children}
    </aside>
  );
};

export default Aside;

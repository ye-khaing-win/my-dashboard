import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import themeConfig from '../../../config/theme.config';
import useAside from '../../../hooks/useAside';

interface IWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<IWrapperProps> = (props) => {
  const { children, className, ...rest } = props;

  const { collapsed } = useAside();

  return (
    <section
      data-component-name="Wrapper"
      className={classNames(
        'flex flex-auto flex-col',
        themeConfig.transition,
        // Desktop Design
        {
          'peer-[]:md:pl-[20rem]': !collapsed,
          'peer-[]:md:pl-[6.225rem]': collapsed,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Wrapper;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IAsideHeadProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const AsideHead: FC<IAsideHeadProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Aside/AsideHead"
      className={classNames(
        'flex items-center justify-between',
        'px-6 pb-6',
        'max-md:flex-row-reverse',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AsideHead;

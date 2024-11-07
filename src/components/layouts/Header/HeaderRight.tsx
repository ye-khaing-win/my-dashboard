import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IHeaderRightProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const HeaderRight: FC<IHeaderRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Header/HeaderRight"
      className={classNames('flex items-center gap-4', 'md:ml-auto', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default HeaderRight;

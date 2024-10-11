import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IAsideBodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const AsideBody: FC<IAsideBodyProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Aside/AsideBody"
      className={classNames(
        'h-full overflow-x-scroll px-6',
        'no-scrollbar',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AsideBody;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ISubheaderRightProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const SubheaderRight: FC<ISubheaderRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Subheader/SubheaderRight"
      className={classNames(
        'flex flex-shrink-0 flex-wrap items-center gap-4',
        'md:ml-auto',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SubheaderRight;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ISubheaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const SubheaderLeft: FC<ISubheaderLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Subheader/SubheaderLeft"
      className={classNames(
        'flex flex-wrap items-center gap-4',
        'md:mr-auto',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SubheaderLeft;

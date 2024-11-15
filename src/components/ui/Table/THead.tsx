import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}
const THead: FC<IHeadProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <thead
      data-component-name="Table/THead"
      className={classNames(className)}
      {...rest}
    >
      {children}
    </thead>
  );
};

export default THead;

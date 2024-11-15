import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ITBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

const TBody: FC<ITBodyProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <tbody
      data-component-name="Table/TBody"
      className={classNames(className)}
      {...rest}
    >
      {children}
    </tbody>
  );
};

export default TBody;

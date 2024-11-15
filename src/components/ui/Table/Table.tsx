import classNames from 'classnames';
import { TableHTMLAttributes, ReactNode, FC } from 'react';

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
}

const Table: FC<ITableProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <table
      data-component-name="Table"
      className={classNames('w-full', className)}
      {...rest}
    >
      {children}
    </table>
  );
};

export default Table;

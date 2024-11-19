import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ITableToolbarTemplate extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const TableToolbarTemplate: FC<ITableToolbarTemplate> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classNames('flex flex-wrap items-center gap-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TableToolbarTemplate;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ITrProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
}

const Tr: FC<ITrProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <tr
      data-component-name="Table/Tr"
      className={classNames('group/Tr', className)}
      {...rest}
    >
      {children}
    </tr>
  );
};

export default Tr;

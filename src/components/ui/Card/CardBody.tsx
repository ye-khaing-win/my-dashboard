import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ICardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const CardBody: FC<ICardBodyProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Card/CardBody"
      className={classNames(
        'flex',
        'px-4 pb-4 [&:first-child]:pt-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardBody;

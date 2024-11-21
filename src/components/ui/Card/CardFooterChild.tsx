import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ICardFooterChildProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const CardFooterChild: FC<ICardFooterChildProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Card/CardFooterChild"
      className={classNames('flex flex-wrap items-center gap-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardFooterChild;

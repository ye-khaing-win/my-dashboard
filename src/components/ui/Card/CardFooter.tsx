import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const CardFooter: FC<ICardFooterProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Card/CardFooter"
      className={classNames(
        'flex flex-wrap items-center justify-between gap-4 px-4 pb-4 [&:first-child]:pt-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardFooter;

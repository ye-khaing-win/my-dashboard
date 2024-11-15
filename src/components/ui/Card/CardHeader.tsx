import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const CardHeader: FC<ICardHeaderProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Card/CardHeader"
      className={classNames(
        'flex flex-wrap items-center justify-between gap-4',
        'px-4 pb-4 [&:first-child]:pt-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardHeader;

import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ICardTitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const CardTitle: FC<ICardTitleProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Card/CardTitle"
      className={classNames(
        'flex items-center',
        'text-2xl font-semibold',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardTitle;

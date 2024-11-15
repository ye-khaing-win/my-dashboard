import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface ICardHeaderChildProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const CardHeaderChild: FC<ICardHeaderChildProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Card/CardHeaderChild"
      className={classNames('flex flex-wrap items-center gap-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardHeaderChild;

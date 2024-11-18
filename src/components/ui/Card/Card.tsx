import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { TRounded } from '../../../types/rounded.type';
import getRoundedSize from '../../../utils/getRoundedSize';
import themeConfig from '../../../config/theme.config';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rounded?: TRounded | 'auto';
}

const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, className, rounded = 'auto', ...rest } = props;

  const { roundedCustom } = getRoundedSize(themeConfig.rounded);

  return (
    <div
      ref={ref}
      data-component-name="Card"
      className={classNames(
        'flex flex-col bg-white shadow-sm dark:bg-zinc-900',
        {
          [rounded as TRounded]: rounded !== 'auto',
          [roundedCustom(1)]: rounded === 'auto',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Card;

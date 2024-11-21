import classNames from 'classnames';
import { FC, ReactNode, ThHTMLAttributes } from 'react';

interface IThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  isResizable?: boolean;
}

const Th: FC<IThProps> = (props) => {
  const { children, className, isResizable, ...rest } = props;

  const styles = classNames(
    'bg-zinc-100',
    'dark:bg-zinc-950/90',
    'p-4',
    'font-normal',
    // 'group-[&:first-child]/Tr:[&:first-child]:rounded-tl-lg',
    // 'group-[&:first-child]/Tr:[&:last-child]:rounded-tr-lg',
    {
      relative: isResizable,
    },
    className,
  );

  return (
    <th data-component-name="Table/Th" className={styles} {...rest}>
      {children}
    </th>
  );
};

export default Th;

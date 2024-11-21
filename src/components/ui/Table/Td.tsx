import classNames from 'classnames';
import { TdHTMLAttributes, ReactNode, FC } from 'react';
import themeConfig from '../../../config/theme.config';

interface ITdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
}

const Td: FC<ITdProps> = (props) => {
  const { children, className, ...rest } = props;

  const styles = classNames(
    '[&:first-child]:rounded-l-lg',
    '[&:last-child]:rounded-r-lg',
    // 'group-even/Tr:bg-zinc-500/5',
    'group-hover/Tr:bg-zinc-500/10',
    // 'dark:group-even/Tr:bg-zinc-950/50',
    'dark:group-hover/Tr:bg-zinc-950/90',
    'p-4',
    themeConfig.transition,
    className,
  );

  return (
    <td data-component-name="Table/Td" className={styles} {...rest}>
      {children}
    </td>
  );
};

export default Td;

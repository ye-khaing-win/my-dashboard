import classNames from 'classnames';
import { FC, LabelHTMLAttributes, ReactNode } from 'react';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  //   description?: string;
  className?: string;
}

const Label: FC<ILabelProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <label
      data-component-name="Label"
      className={classNames(
        'mb-2 inline-block w-full cursor-pointer text-sm',
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;

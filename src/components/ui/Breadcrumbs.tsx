import { Children, FC, HTMLAttributes, ReactNode } from 'react';
import Nav from '../layouts/Navigation/Nav';
import classNames from 'classnames';

interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  separator?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => {
  const { className, children, separator = '/', ...rest } = props;

  return (
    <Nav
      data-component-name="Breadcrumbs"
      className={classNames(className)}
      {...rest}
    >
      <ol className={classNames('flex flex-wrap items-center gap-4')}>
        {Children.map(children, (child, index) => (
          <>
            {index !== 0 && <li className="flex items-center">{separator}</li>}
            <li>{child}</li>
          </>
        ))}
      </ol>
    </Nav>
  );
};

export default Breadcrumbs;

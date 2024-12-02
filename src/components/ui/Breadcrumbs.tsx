import { FC, HTMLAttributes, ReactNode } from 'react';
import Nav from '../layouts/Navigation/Nav';
import classNames from 'classnames';
import capitalize from '../../utils/capitalize';
import { Link } from 'react-router-dom';

interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  separator?: ReactNode;
  className?: string;
  paths: string[];
}

const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => {
  const { className, paths, separator = '/', ...rest } = props;

  return (
    <Nav
      data-component-name="Breadcrumbs"
      className={classNames(className)}
      {...rest}
    >
      <ol className={classNames('flex flex-wrap items-center gap-4')}>
        {/* {Children.map(children, (child, index) => (
          <>
            {index !== 0 && <li className="flex items-center">{separator}</li>}
            <li>{child}</li>
          </>
        ))} */}
        {paths.map((path, index) => (
          <>
            {index !== 0 && <li className="flex items-center">{separator}</li>}
            <li>
              {index === paths.length - 1 ? (
                <span className="text-zinc-500">{capitalize(path)}</span>
              ) : (
                <Link to={`/${path}`}>{capitalize(path)}</Link>
              )}
            </li>
          </>
        ))}
      </ol>
    </Nav>
  );
};

export default Breadcrumbs;

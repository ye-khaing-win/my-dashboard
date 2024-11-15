import { FC, ReactNode } from 'react';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import classNames from 'classnames';
import themeConfig from '../../../config/theme.config';

interface IPageWrapperProps {
  children: ReactNode;
  className?: string;
  isProtectedRoute?: boolean;
  title?: string;
  name?: string;
}

const PageWrapper: FC<IPageWrapperProps> = (props) => {
  const {
    children,
    className,
    title = themeConfig.projectTitle,
    name = themeConfig.projectName,
    ...rest
  } = props;

  useDocumentTitle({ title, name });

  return (
    <main
      data-component-name="PageWrapper"
      className={classNames('flex shrink-0 grow flex-col', className)}
      {...rest}
    >
      {children}
    </main>
  );
};

export default PageWrapper;

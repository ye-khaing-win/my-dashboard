import { FC, HTMLAttributes, ReactNode } from 'react';

interface IAsideHeadProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const AsideHead: FC<IAsideHeadProps> = (props) => {
  const { children, className, ...rest } = props;

  return <div data-component-name="Aside/AsideHead">AsideHead</div>;
};

export default AsideHead;

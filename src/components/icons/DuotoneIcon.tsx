import { FC, HTMLAttributes } from 'react';
import * as DuoIcon from './duotone';
import { TDuotoneIcon } from '../../types/duotoneIcon.type';
import classNames from 'classnames';

interface IDuotoneIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: TDuotoneIcon;
  className?: string;
}
const DuotoneIcon: FC<IDuotoneIconProps> = (props) => {
  const { icon, className } = props;

  const DuotoneIconWrapper = DuoIcon[icon];

  if (typeof DuotoneIconWrapper === 'function') {
    return (
      <DuotoneIconWrapper
        data-component-name="DuotoneIcon"
        className={classNames('svg-icon', className)}
      />
    );
  }

  return <div>DuoToneIcon</div>;
};

export default DuotoneIcon;

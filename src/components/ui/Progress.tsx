import { FC, HTMLAttributes } from 'react';
import { TColor } from '../../types/color.type';
import { TRounded } from '../../types/rounded.type';
import themeConfig from '../../config/theme.config';
import classNames from 'classnames';
import getColorPreset from '../../utils/getColorPreset';

interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  value?: number;
  min?: number;
  max?: number;
  color?: TColor;
  rounded?: TRounded;
  isAnimation?: boolean;
}

const Progress: FC<IProgressProps> = (props) => {
  const {
    className,
    value,
    min = 0,
    max = 100,
    color = themeConfig.themeColor,
    rounded = themeConfig.rounded,
    isAnimation = false,
    ...rest
  } = props;

  const { bg } = getColorPreset(color);

  const calculatedValue =
    typeof value !== 'undefined' ? (100 * (value - min)) / max - min : '';

  return (
    <div
      data-component-name="Progress"
      className={classNames(
        'flex',
        'h-5 w-full',
        'bg-zinc-500/10',
        'overflow-hidden',
        rounded,
        className,
      )}
      {...rest}
    >
      <div
        className={classNames(
          'h-full',
          [bg.default.pure],
          {
            'animate-pulse': isAnimation,
          },
          rounded,
          themeConfig.transition,
        )}
        style={{ width: `${calculatedValue}%` }}
      />
    </div>
  );
};

export default Progress;

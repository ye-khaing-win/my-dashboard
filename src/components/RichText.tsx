import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { TBorderWidth } from '../types/borderWidth.type';
import { TColorIntensity } from '../types/colorIntensities.type';
import { TColor } from '../types/color.type';
import classNames from 'classnames';
import getColorPreset from '../utils/getColorPreset';

export type TRichTextVariants = 'solid';

interface IRichTextProps extends HTMLAttributes<HTMLDivElement> {
  borderWidth?: TBorderWidth;
  children?: ReactNode;
  className?: string;
  color?: TColor;
  colorIntensity?: TColorIntensity;
  invalidFeedback?: string;
  isTouched?: boolean;
  isValid?: boolean;
  variant?: TRichTextVariants;
}

const RichText: FC<IRichTextProps> = (props) => {
  const {
    borderWidth,
    children,
    color,
    invalidFeedback,
    isTouched,
    isValid,
    className,
    variant = 'solid',
  } = props;

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const { bg, border, text } = getColorPreset(color);
  const { bg: bgDark } = getColorPreset(color, 'dark');

  const richTextVariant: {
    [key in TRichTextVariants]: {
      general: string;
      validation: string;
    };
  } = {
    solid: {
      general: classNames(
        [borderWidth],
        {
          // Default
          'border-zinc-100 dark:border-zinc-800': !isFocus,
          'bg-zinc-100 dark:bg-zinc-800': !isFocus,
        },
        {
          [bg.hover.pure]: !isFocus,
          [bgDark.hover.pure]: !isFocus,
        },
        // Focus
        {
          'border-zinc-300 dark:border-zinc-800': isFocus,
          'bg-transparent dark:bg-transparent': isFocus,
        },
      ),
      validation: classNames({
        '!border-red-500 ring-4 ring-red-500/30':
          !isValid && isTouched && invalidFeedback,
        '!border-green-500 focus:ring-4 focus:ring-green-500/30':
          !isValid && isTouched && !invalidFeedback,
      }),
    },
  };

  const richTextVariantStyles = richTextVariant[variant].general;

  return <div>RichText</div>;
};

export default RichText;

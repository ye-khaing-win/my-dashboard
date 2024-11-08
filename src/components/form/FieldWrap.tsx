import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useRef,
} from 'react';
import { IValidationBaseProps } from './Validation';
import useDomRect from '../../hooks/useDomRect';
import classNames from 'classnames';

interface IFieldWrapProps
  extends HTMLAttributes<HTMLDivElement>,
    Partial<IValidationBaseProps> {
  children: ReactElement;
  className?: string;
  firstChild?: ReactNode;
  lastChild?: ReactNode;
}

const styles = classNames(
  'absolute top-[2px] bottom-[2px] flex justify-center items-center px-1 rounded',
);

const FieldWrap = forwardRef<HTMLDivElement, IFieldWrapProps>((props, ref) => {
  const {
    children,
    className,
    firstChild,
    lastChild,
    isValid,
    isTouched,
    invalidFeedback,
    ...rest
  } = props;

  const firstChildRef = useRef<HTMLDivElement>(null);
  const [firstChildDomRect] = useDomRect(firstChildRef);

  const lastChildRef = useRef<HTMLDivElement>(null);
  const [lastChildDomRect] = useDomRect(lastChildRef);

  return (
    <div
      ref={ref}
      data-component-name="FieldWrap"
      className={classNames('relative', className)}
      {...rest}
    >
      {firstChild && (
        <div ref={firstChildRef} className={classNames(styles, 'start-px')}>
          {firstChild}
        </div>
      )}
      {/* TODO: need to add cloneElement */}
      {cloneElement(children, {
        isValid,
        isTouched,
        invalidFeedback,
        style: {
          paddingLeft: firstChild && firstChildDomRect?.width,
          paddingRight: lastChild && lastChildDomRect?.width,
        },
      })}
      {lastChild && (
        <div ref={lastChildRef} className={classNames(styles, 'end-px')}>
          {lastChild}
        </div>
      )}
    </div>
  );
});

export default FieldWrap;

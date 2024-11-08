export interface IValidationBaseProps {
  isValidMessage?: boolean;
  isValid?: boolean;
  isTouched?: boolean | undefined;
  invalidFeedback: string | undefined;
  validFeedback?: string;
}

const Validation = () => {
  return <div>Validation</div>;
};

export default Validation;

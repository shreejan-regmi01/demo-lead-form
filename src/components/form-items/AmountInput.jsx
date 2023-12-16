import BaseInput from './BaseInput';

export default function AmountInput({ ...rest }) {
  return <BaseInput placeholder="Amount" prefix="$" {...rest} />;
}

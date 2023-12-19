import { InputNumber } from 'antd';

export default function AmountInput({ ...rest }) {
  return (
    <InputNumber
      placeholder="Amount"
      prefix="$"
      size="large"
      className="text-center rounded-full text-sm w-full"
      controls={false}
      {...rest}
    />
  );
}

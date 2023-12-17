import { Button } from 'antd';

export default function PrimaryButton({ label = 'Continue', ...rest }) {
  return (
    <Button type="primary" size="large" className="!rounded-full float-right" {...rest}>
      {label}
    </Button>
  );
}

import { Button, Form, Select, Typography } from 'antd';
import AmountInput from '../form-items/AmountInput';
import BaseInput from '../form-items/BaseInput';
import { PercentageOutlined } from '@ant-design/icons';

export default function LoanDetailsForm() {
  const [form] = Form.useForm();
  return (
    <>
      <Typography.Title level={1}>Loan details</Typography.Title>
      <Form layout="vertical" form={form} className="mt-4">
        <Form.Item label="Approximate purchase price">
          <AmountInput />
        </Form.Item>
        <Form.Item label="Deposit">
          <AmountInput />
        </Form.Item>
        <Form.Item label="Loan term">
          <Select
            defaultValue={1}
            className="text-center"
            size="large"
            options={[
              {
                value: 1,
                label: '1 year',
              },
              {
                value: 2,
                label: '2 years',
              },
              {
                value: 3,
                label: '3 years',
              },
              {
                value: 4,
                label: '4 years',
              },
              {
                value: 5,
                label: '5 years',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Balloon">
          <BaseInput defaultValue={0} suffix={<PercentageOutlined />} />;
        </Form.Item>
        <Form.Item className="text-right">
          <Button type="primary" size="large" className="!rounded-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

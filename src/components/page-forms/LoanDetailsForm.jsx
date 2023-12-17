import { Form, Select, Typography } from 'antd';
import AmountInput from '../form-items/AmountInput';
import BaseInput from '../form-items/BaseInput';
import { PercentageOutlined } from '@ant-design/icons';
import {
  LOAN_TERM_1_YEAR,
  LOAN_TERM_2_YEARS,
  LOAN_TERM_3_YEARS,
  LOAN_TERM_4_YEARS,
  LOAN_TERM_5_YEARS,
  LOCALSTORAGE_FORMDATA_KEY,
} from '../../constants';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';

export default function LoanDetailsForm() {
  const [form] = Form.useForm();
  const { setItem, getInitializedOrExistingData, getItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  const navigate = useNavigate();

  const formData = getInitializedOrExistingData({
    purchasePrice: null,
    deposit: null,
    term: LOAN_TERM_5_YEARS,
    balloon: 0,
  });

  function onFinish(data) {
    setItem({ ...getItem(), ...data });
    navigate('car-in-mind');
  }

  function onFinishFailed(errorData) {
    console.log(errorData);
  }

  return (
    <>
      <Typography.Title level={1}>Loan details</Typography.Title>
      <Form
        layout="vertical"
        form={form}
        className="mt-4"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formData}
      >
        <Form.Item
          label="Approximate purchase price"
          name="purchasePrice"
          rules={[{ required: true, message: 'Please enter purchase price' }]}
        >
          <AmountInput />
        </Form.Item>
        <Form.Item label="Deposit" name="deposit" rules={[{ required: true, message: 'Please enter deposit' }]}>
          <AmountInput />
        </Form.Item>
        <Form.Item label="Loan term" name="term" rules={[{ required: true, message: 'Please select a loan term' }]}>
          <Select
            className="text-center"
            size="large"
            options={[
              {
                value: LOAN_TERM_1_YEAR,
                label: LOAN_TERM_1_YEAR,
              },
              {
                value: LOAN_TERM_2_YEARS,
                label: LOAN_TERM_2_YEARS,
              },
              {
                value: LOAN_TERM_3_YEARS,
                label: LOAN_TERM_3_YEARS,
              },
              {
                value: LOAN_TERM_4_YEARS,
                label: LOAN_TERM_4_YEARS,
              },
              {
                value: LOAN_TERM_5_YEARS,
                label: LOAN_TERM_5_YEARS,
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Balloon" name={'balloon'}>
          <BaseInput suffix={<PercentageOutlined />} />
        </Form.Item>
        <Form.Item>
          {/* <Button type="primary" size="large" className="!rounded-full" htmlType="submit">
            Submit
          </Button> */}
          <PrimaryButton htmlType="submit" label="Continue" />
        </Form.Item>
      </Form>
    </>
  );
}

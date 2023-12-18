import { Form, Typography } from 'antd';
import { BUYING_FROM, CAR_CONDITIONS, LOCALSTORAGE_FORMDATA_KEY, URGENCIES } from '../../constants';
import useLocalStorage from '../../hooks/useLocalStorage';
// import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import BaseSelect from '../../components/form-items/BaseSelect';

export default function LoanDetailsForm() {
  const [form] = Form.useForm();
  const { setItem, getInitializedOrExistingData, getItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  //   const navigate = useNavigate();

  const formData = getInitializedOrExistingData({
    carCondition: null,
    buyingFrom: null,
    urgency: null,
  });

  function onFinish(data) {
    setItem({ ...getItem(), ...data });
    // navigate('car-in-mind');
  }

  function onFinishFailed(errorData) {
    console.log(errorData);
  }

  return (
    <>
      <Typography.Title level={1}>Purchase Information</Typography.Title>
      <Form
        layout="vertical"
        form={form}
        className="mt-4"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formData}
      >
        <Form.Item
          label="Car condition"
          name="carCondition"
          rules={[{ required: true, message: 'Please select an option' }]}
        >
          <BaseSelect options={CAR_CONDITIONS.map((v) => ({ label: v, value: v }))} />
        </Form.Item>
        <Form.Item
          label="Where are you buying from?"
          name="buyingFrom"
          rules={[{ required: true, message: 'Please select an option' }]}
        >
          <BaseSelect options={BUYING_FROM.map((v) => ({ label: v, value: v }))} />
        </Form.Item>
        <Form.Item
          label="How quickly do you want to purchase?"
          name="urgency"
          rules={[{ required: true, message: 'Please select an option' }]}
        >
          <BaseSelect options={URGENCIES.map((v) => ({ label: v, value: v }))} />
        </Form.Item>
        <Form.Item>
          <PrimaryButton htmlType="submit" label="Continue" />
        </Form.Item>
      </Form>
    </>
  );
}

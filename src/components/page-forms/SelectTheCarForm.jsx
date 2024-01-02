import { Form, Typography } from 'antd';
import { LOCALSTORAGE_FORMDATA_KEY } from '../../constants';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import BaseSelect from '../../components/form-items/BaseSelect';
import axios from '../../axios';

export default function SelectTheCarForm() {
  const [form] = Form.useForm();
  const { setItem, getItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  const navigate = useNavigate();

  const formData = getItem();

  function getMakes() {
    return Object.keys(carData).map((k) => ({ label: k, value: k }));
  }

  function getModels(selectedMake) {
    return selectedMake ? Object.keys(carData[selectedMake]).map((k) => ({ label: k, value: k })) : null;
  }

  function getYears(selectedMake, selectedModel) {
    if (selectedMake && selectedModel) {
      return Object.keys(carData[selectedMake][selectedModel]).map((y) => ({ label: y, value: y }));
    }
    return null;
  }

  function getModelTypes(selectedMake, selectedModel, selectedYear) {
    if (selectedMake && selectedModel && selectedYear) {
      return carData[selectedMake][selectedModel][selectedYear].map((mT) => ({ label: mT, value: mT }));
    }
    return null;
  }

  function onValuesChanged(changedValues, allValues) {
    if (changedValues.make) {
      form.setFieldsValue({ ...allValues, model: null, year: null, modelType: null });
    } else if (changedValues.model) {
      form.setFieldsValue({ ...allValues, year: null, modelType: null });
    } else if (changedValues.year) {
      form.setFieldsValue({ ...allValues, modelType: null });
    }
  }

  async function onFinish(data) {
    setItem({ ...getItem(), vehicle: data });

    let applicationPayload = getItem();
    delete applicationPayload.vehicle;

    let vehiclePayload = getItem().vehicle;

    try {
      const applicationResponse = await axios.post('/applications', applicationPayload);
      await axios.post('/vehicles', {
        ...vehiclePayload,
        applicationId: applicationResponse.data.id,
      });
      navigate('/submission-success');
    } catch (error) {
      console.log(error);
    }
  }

  function onFinishFailed(errorData) {
    console.log(errorData);
  }

  return (
    <>
      <Typography.Title level={1}>Select the car</Typography.Title>
      <Form
        layout="vertical"
        form={form}
        className="mt-4"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formData?.vehicle}
        onValuesChange={onValuesChanged}
      >
        <Form.Item label="Make" name="make" rules={[{ required: true, message: 'Please select an option' }]}>
          <BaseSelect options={getMakes()} />
        </Form.Item>

        <Form.Item noStyle shouldUpdate={true}>
          {({ getFieldValue }) => (
            <Form.Item label="Model" name="model" rules={[{ required: true, message: 'Please select an option' }]}>
              <BaseSelect options={getModels(getFieldValue('make'))} />
            </Form.Item>
          )}
        </Form.Item>
        <Form.Item noStyle shouldUpdate={true}>
          {({ getFieldValue }) => (
            <Form.Item label="Year" name="year" rules={[{ required: true, message: 'Please select an option' }]}>
              <BaseSelect options={getYears(getFieldValue('make'), getFieldValue('model'))} />
            </Form.Item>
          )}
        </Form.Item>
        <Form.Item noStyle shouldUpdate={true}>
          {({ getFieldValue }) => (
            <Form.Item
              label="Model type"
              name="modelType"
              rules={[{ required: true, message: 'Please select an option' }]}
            >
              <BaseSelect
                options={getModelTypes(getFieldValue('make'), getFieldValue('model'), getFieldValue('year'))}
              />
            </Form.Item>
          )}
        </Form.Item>

        <Form.Item>
          <PrimaryButton htmlType="submit" label="Continue" />
        </Form.Item>
      </Form>
    </>
  );
}

const carData = {
  Abarth: {
    124: {
      2019: ['348 Series 1 Spider Roadster 2dr Spts Auto 6sp 1.4T', '348 Series 1 Spider Roadster 2dr Man 6sp 1.4T'],
      2018: ['448 Series 2 Jaguar Hike 2dr Spts Auto 6sp 1.4T', '448 Series 2 Jaguar Hike 2dr Man 6sp 1.4T'],
    },
    500: {
      2014: ['Series 1 Esseesse Hatchback 3dr Man 5sp 1.4T', 'Series 1 Esseesse C Convertible 2dr MTA 5sp 1.4T'],
      2013: ['Series 1 Esseesse Hatchback 3dr Man 5sp 1.4T', 'Series 1 Esseesse C Convertible 2dr MTA 5sp 1.4T'],
    },
  },
  Bentley: {
    Arnage: {
      2009: ['Series 2 MY08 R Sedan 4dr Spts Auto 6sp 6.8TT'],
      2008: [' Series 2 MY08 RL Sedan LWB 4dr Spts Auto 6sp 6.8TT'],
    },
  },
};

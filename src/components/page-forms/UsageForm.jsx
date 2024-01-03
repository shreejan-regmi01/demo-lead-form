import { Typography } from 'antd';
import SelectOption from '../form-items/SelectOption';
import { useContext, useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCALSTORAGE_FORMDATA_KEY, USAGE_BUSINESS, USAGE_PERSONAL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';
import { NotificationContext } from '../../App';

export default function UsageForm() {
  const { notificationApi } = useContext(NotificationContext);
  const { getItem, setItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  const [selectedOption, setSelectedOption] = useState(getItem()?.usage);
  const navigate = useNavigate();

  async function continueJourney() {
    const existingData = getItem();
    setItem({ ...existingData, usage: selectedOption });

    let applicationPayload = getItem();
    delete applicationPayload.vehicle;
    let vehiclePayload = getItem().vehicle;

    try {
      const applicationResponse = await axios.post('/applications', applicationPayload);
      if (vehiclePayload) {
        await axios.post('/vehicles', {
          ...vehiclePayload,
          applicationId: applicationResponse.data.id,
        });
      }
      navigate('/submission-success');
    } catch (err) {
      notificationApi.error({
        message: err.response.data.error,
        description: err.response.data.message.join('\n'),
      });
    }
  }

  return (
    <>
      <Typography.Title level={1}>Usage</Typography.Title>
      <SelectOption
        label="Personal use"
        selected={selectedOption === USAGE_PERSONAL}
        onClick={() => setSelectedOption(USAGE_PERSONAL)}
      />
      <SelectOption
        label="Business use"
        selected={selectedOption === USAGE_BUSINESS}
        onClick={() => setSelectedOption(USAGE_BUSINESS)}
      />
      <PrimaryButton onClick={continueJourney} />
    </>
  );
}

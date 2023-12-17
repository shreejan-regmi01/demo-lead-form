import { Typography } from 'antd';
import SelectOption from '../form-items/SelectOption';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCALSTORAGE_FORMDATA_KEY } from '../../constants';
import { useNavigate } from 'react-router-dom';

export default function CarInMindForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { getItem, setItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  const navigate = useNavigate();

  function continueJourney() {
    const existingData = getItem();
    setItem({ ...existingData, hasCarInMind: selectedOption });
    navigate('/purchase-information');
  }

  return (
    <>
      <Typography.Title level={1}>Have a car in mind?</Typography.Title>
      <SelectOption label="Yes" selected={selectedOption === true} onClick={() => setSelectedOption(true)} />
      <SelectOption label="No" selected={selectedOption === false} onClick={() => setSelectedOption(false)} />
      <PrimaryButton onClick={continueJourney} />
    </>
  );
}

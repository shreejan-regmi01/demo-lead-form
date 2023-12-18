import { Typography } from 'antd';
import SelectOption from '../form-items/SelectOption';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCALSTORAGE_FORMDATA_KEY, USAGE_BUSINESS, USAGE_PERSONAL } from '../../constants';
// import { useNavigate } from 'react-router-dom';

export default function UsageForm() {
  const { getItem, setItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  const [selectedOption, setSelectedOption] = useState(getItem()?.usage);
  //   const navigate = useNavigate();

  function continueJourney() {
    const existingData = getItem();
    setItem({ ...existingData, usage: selectedOption });
    // navigate('/purchase-information');
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

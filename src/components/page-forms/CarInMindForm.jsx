import { Typography } from 'antd';
import SelectOption from '../form-items/SelectOption';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCALSTORAGE_FORMDATA_KEY } from '../../constants';
import { useNavigate } from 'react-router-dom';

export default function CarInMindForm() {
  const { getItem, setItem } = useLocalStorage(LOCALSTORAGE_FORMDATA_KEY);
  const [hasCarInMind, setHasCarInMind] = useState(getItem()?.hasCarInMind);
  const navigate = useNavigate();

  function continueJourney() {
    let pageToNavigateTo = hasCarInMind ? '/purchase-information' : '/usage';
    const existingData = getItem();
    setItem({ ...existingData, hasCarInMind });
    navigate(pageToNavigateTo);
  }

  return (
    <>
      <Typography.Title level={1}>Have a car in mind?</Typography.Title>
      <SelectOption label="Yes" selected={hasCarInMind === true} onClick={() => setHasCarInMind(true)} />
      <SelectOption label="No" selected={hasCarInMind === false} onClick={() => setHasCarInMind(false)} />
      <PrimaryButton onClick={continueJourney} />
    </>
  );
}

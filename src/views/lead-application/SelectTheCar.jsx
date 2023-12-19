import FormWrapper from '../../components/FormWrapper';
import SelectTheCarForm from '../../components/page-forms/SelectTheCarForm';

export default function SelectTheCar() {
  const message = (
    <>
      <p>Please tell us what car you would like</p>
    </>
  );
  return (
    <FormWrapper message={message}>
      <SelectTheCarForm />
    </FormWrapper>
  );
}

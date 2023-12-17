import FormWrapper from '../../components/FormWrapper';
import CarInMindForm from '../../components/page-forms/CarInMindForm';

export default function CarInMind() {
  const message = (
    <>
      <p>Do you know what car you want?</p>
    </>
  );
  return (
    <FormWrapper message={message}>
      <CarInMindForm />
    </FormWrapper>
  );
}

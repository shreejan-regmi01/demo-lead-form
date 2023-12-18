import FormWrapper from '../../components/FormWrapper';
import UsageForm from '../../components/page-forms/UsageForm';

export default function Usage() {
  const message = (
    <>
      <p>What will be the primary use of the vehicle?</p>
    </>
  );
  return (
    <FormWrapper message={message}>
      <UsageForm />
    </FormWrapper>
  );
}

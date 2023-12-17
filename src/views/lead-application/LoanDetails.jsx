import FormWrapper from '../../components/FormWrapper';
import LoanDetailsForm from '../../components/page-forms/LoanDetailsForm';

export default function LoanDetails() {
  const message = (
    <>
      <p>Hi I&apos;m Kate. I&apos;m here to find you the best car loan options.</p>
      <p className="mt-2">Let&apos;s get started!</p>
    </>
  );
  return (
    <FormWrapper message={message}>
      <LoanDetailsForm />
    </FormWrapper>
  );
}

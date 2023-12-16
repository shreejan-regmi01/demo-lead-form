import FormWrapper from '../../components/FormWrapper';
import LoanDetailsForm from '../../components/page-forms/LoanDetailsForm';

export default function LoanDetails() {
  return (
    <div className="mt-8 w-[40%] mx-auto max-w-[465px]">
      <FormWrapper>
        <LoanDetailsForm />
      </FormWrapper>
    </div>
  );
}

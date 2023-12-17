import FormWrapper from '../../components/FormWrapper';
import PurchaseInformationForm from '../../components/page-forms/PurchaseInformationForm';
export default function PurchaseInformation() {
  const message = (
    <>
      <p>Just a few questions about your car purchase</p>
    </>
  );
  return (
    <FormWrapper message={message}>
      <PurchaseInformationForm />
    </FormWrapper>
  );
}

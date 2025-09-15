import { Form } from "antd";
import { useEffect } from "react";

export default function SubmitButton({
  form,
  submittable,
  setSubmittable,
  onFinish,
  billingAddressForm,
  billingAddress,
}) {
  const formValues = Form.useWatch([], form);
  const billingAddressFormValues = Form.useWatch([], billingAddressForm);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => {
        if (!billingAddress) {
          billingAddressForm
            .validateFields({
              billingAddressFormvalidateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
        } else {
          setSubmittable(true);
        }
      })
      .catch(() => setSubmittable(false));
  }, [form, formValues, billingAddressForm, billingAddressFormValues]);

  return (
    <span>
      <button
        key="submit"
        type="primary"
        className="btn btn-outline-dark btn-sbuttonm m-2"
        onClick={onFinish}
        disabled={!submittable}
      >
        Submit
      </button>
    </span>
  );
}

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
  const values = Form.useWatch([], form);

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
  }, [form, values]);

  return (
    <span>
      <button
        key="submit"
        type="primary"
        className="btn btn-outline-dark btn-sbuttonm m-2"
        onClick={onFinish}
        disabled={!submittable}
      >
        Submit1
      </button>
      {/* <Button
        key="submit"
        type="primary"
        onClick={onFinish}
        disabled={!submittable}
      >
        Submit
      </Button> */}
    </span>
  );
}

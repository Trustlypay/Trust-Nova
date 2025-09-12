import { Form, Input } from "antd";
import { useContext } from "react";
import UserContext from "../components/user-context";

export default function BillingAddress({ billingAddressForm }) {
  const { userDetails } = useContext(UserContext);

  return (
    <Form
      name="BillingAddressformvalidateOnly"
      {...{
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      }}
      size="small"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      form={billingAddressForm}
      autoComplete="off"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <div style={{ textAlign: "center" }} className="heading-2">
        Billing Address
      </div>
      <b>Contact Details</b>
      <Form.Item
        label="Name"
        name="Name"
        validateFirst
        rules={[
          { required: true },
          { required: true, min: 3 },
          { whitespace: true },
        ]}
        initialValue={userDetails?.userName ?? ""}
      >
        <Input placeholder="Enter Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        validateFirst
        rules={[{ required: true }, { type: "email" }, { whitespace: true }]}
        initialValue={userDetails?.email ?? ""}
      >
        <Input placeholder="Enter Email" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="Phone Number"
        validateFirst
        rules={[
          { required: true },
          {
            validator: (_, value) => {
              if (value.toString().length !== 10) {
                return Promise.reject("Phone Number must be exactly 10 digits");
              }
              if (!["6", "7", "8", "9"].includes(value.toString().charAt(0))) {
                return Promise.reject("Enter Valid Phone Number");
              }
              return Promise.resolve();
            },
          },

          { whitespace: true },
        ]}
        initialValue={userDetails?.phoneNumber ?? ""}
      >
        <Input
          placeholder="Enter Phone Number"
          maxLength={10}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
          }}
        />
      </Form.Item>
      <b>Shipping Address </b>
      <Form.Item
        name="Address"
        label="Address"
        validateFirst
        rules={[
          { required: true },
          { required: true, min: 3 },
          { whitespace: true },
        ]}
      >
        <Input.TextArea
          autoSize={{ minRows: 3, maxRows: 3 }}
          placeholder="Address"
        />
      </Form.Item>
      <Form.Item
        name="Pincode"
        label="Pincode"
        validateFirst
        rules={[
          { required: true },
          {
            validator: (_, value) => {
              if (value.toString().length !== 6) {
                return Promise.reject("Pincode must be exactly 6 digits");
              }
              return Promise.resolve();
            },
          },
          { whitespace: true },
        ]}
      >
        <Input
          placeholder="Enter Pincode"
          maxLength={6}
          onInput={async (e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");

            const response = await fetch(
              `https://api.postalpincode.in/pincode/${e.currentTarget.value}`
            );

            const data = await response.json();

            if (data[0].Status === "Success" && data[0].PostOffice.length > 0) {
              const city = data[0].PostOffice[0].District;
              const state = data[0].PostOffice[0].State;
              billingAddressForm.setFieldsValue({
                City: city,
                State: state,
              });
              billingAddressForm.setFields([
                {
                  name: "Pincode",
                  errors: [],
                },
              ]);
            } else {
              billingAddressForm.setFields([
                {
                  name: "Pincode",
                  errors: ["Invalid Pincode"],
                },
              ]);
            }
          }}
        />
      </Form.Item>
      <Form.Item
        name="State"
        label="State"
        validateFirst
        rules={[
          { required: true },
          { required: true, min: 3 },
          { whitespace: true },
        ]}
      >
        <Input
          disabled
          placeholder="Enter State"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^a-zA-Z]/g,
              ""
            );
          }}
        />
      </Form.Item>
      <Form.Item
        name="City"
        label="City"
        validateFirst
        rules={[
          { required: true },
          { required: true, min: 3 },
          { whitespace: true },
        ]}
      >
        <Input
          disabled
          placeholder="Enter City"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^a-zA-Z]/g,
              ""
            );
          }}
        />
      </Form.Item>
    </Form>
  );
}

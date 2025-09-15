import { Checkbox, Form, Input, Radio } from "antd";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../components/user-context";
import BillingAddress from "./Billing-Address";
import SubmitButton from "../components/submit-button";
import { userService } from "../service/user.service";
import PaymentSuccess from "../components/payment-success";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-dark text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-light mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    const [form] = Form.useForm();
    const { userDetails } = useContext(UserContext);
    const [billingAddress, setBillingAddress] = useState(true);
    const [submittable, setSubmittable] = useState(false);
    const [billingAddressForm] = Form.useForm();
    const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);

    const onFinish = (e) => {
      e.preventDefault();
      void form.validateFields().then(() => {
        if (!billingAddress) {
          void billingAddressForm.validateFields().then(() => {
            if (form.getFieldValue("Payment Option") === "UPI") {
              userService
                .paymentLink(Math.round(subtotal), `${Math.round(subtotal)}`)
                .then((data) => (window.location.href = data.short_url));
            } else if (form.getFieldValue("Payment Option") === "COD") {
              setIsModalOpenSuccess(true);
            }
          });
        } else {
          if (form.getFieldValue("Payment Option") === "UPI") {
            userService
              .paymentLink(Math.round(subtotal), `${Math.round(subtotal)}`)
              .then((data) => (window.location.href = data.short_url));
          } else if (form.getFieldValue("Payment Option") === "COD") {
            setIsModalOpenSuccess(true);
          }
        }
      });
    };

    let subtotal = 0;
    let gst = 0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (gst += item.gst * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})
                      <span>
                        ₹{Math.round(subtotal - gst)?.toLocaleString("en-IN")}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>₹{gst?.toLocaleString("en-IN")}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>
                          ₹{Math.round(subtotal)?.toLocaleString("en-IN")}
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <Form
                    name="validateOnly"
                    {...{
                      labelCol: { span: 6 },
                      wrapperCol: { span: 14 },
                    }}
                    size="small"
                    style={{
                      margin: "0px auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    form={form}
                    autoComplete="off"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                      }
                    }}
                    onFinish={onFinish}
                  >
                    <div style={{ textAlign: "center" }} className="heading-2">
                      Shipping Address
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
                      rules={[
                        { required: true },
                        { type: "email" },
                        { whitespace: true },
                      ]}
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
                              return Promise.reject(
                                "Phone Number must be exactly 10 digits"
                              );
                            }
                            if (
                              !["6", "7", "8", "9"].includes(
                                value.toString().charAt(0)
                              )
                            ) {
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
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            ""
                          );
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
                              return Promise.reject(
                                "Pincode must be exactly 6 digits"
                              );
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
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            ""
                          );

                          const response = await fetch(
                            `https://api.postalpincode.in/pincode/${e.currentTarget.value}`
                          );

                          const data = await response.json();

                          if (
                            data[0].Status === "Success" &&
                            data[0].PostOffice.length > 0
                          ) {
                            const city = data[0].PostOffice[0].District;
                            const state = data[0].PostOffice[0].State;

                            form.setFieldsValue({
                              City: city,
                              State: state,
                            });
                            form.setFields([
                              {
                                name: "Pincode",
                                errors: [],
                              },
                            ]);
                          } else {
                            form.setFields([
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
                          // optional: remove non-digit chars
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^a-zA-Z]/g,
                            ""
                          );
                        }}
                      />
                    </Form.Item>
                    <Checkbox
                      checked={billingAddress}
                      onChange={(e) => {
                        setBillingAddress(e.target.checked);
                        if (e.target.checked) {
                          setSubmittable(true);
                        }
                        if (!e.target.checked) {
                          setSubmittable(false);
                        }
                      }}
                    >
                      Billing Address is same as Shippping Address
                    </Checkbox>
                    <div className="my-3 h-px bg-zinc-200" />
                    {!billingAddress && (
                      <BillingAddress
                        billingAddressForm={billingAddressForm}
                      ></BillingAddress>
                    )}{" "}
                    <Form.Item
                      name="Payment Option"
                      label="Payment Option"
                      validateFirstrules={[{ required: true }]}
                    >
                      <Radio.Group
                        name="radiogroup"
                        options={[
                          { value: "UPI", label: "UPI" },
                          { value: "COD", label: "COD" },
                        ]}
                      />
                    </Form.Item>
                    <SubmitButton
                      form={form}
                      submittable={submittable}
                      setSubmittable={setSubmittable}
                      onFinish={onFinish}
                      billingAddressForm={billingAddressForm}
                      billingAddress={billingAddress}
                    ></SubmitButton>
                  </Form>
                  <PaymentSuccess
                    setIsModalOpenSuccess={setIsModalOpenSuccess}
                    isModalOpenSuccess={isModalOpenSuccess}
                  ></PaymentSuccess>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;

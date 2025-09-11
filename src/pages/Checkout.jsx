import { Checkbox, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../components/user-context";
import BillingAddress from "./Billing-Address";
import SubmitButton from "../components/submit-button";
import { userService } from "../service/user.service";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
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
    const [enableAddress, setEnableAddress] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState();

    const onFinish = (e) => {
      e.preventDefault();
      void form.validateFields().then(() => {
        console.log("okay");
        if (!billingAddress) {
          void billingAddressForm.validateFields().then(() => {
            userService.paymentLink(
              Math.round(subtotal + shipping),
              `${Math.round(subtotal + shipping)}`
            );

            setIsModalOpen(false);
            setEnableAddress(true);
          });
        } else {
          setIsModalOpen(false);
          setEnableAddress(true);
          userService.paymentLink(
            Math.round(subtotal + shipping),
            `${Math.round(subtotal + shipping)}`
          );
        }
      });
    };

    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
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
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
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
                  {/* <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          State
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Punjab</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary "
                      type="submit"
                      disabled
                    >
                      Continue to checkout
                    </button>
                  </form> */}
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
                    {/* <button className="btn btn-outline-dark btn-sbuttonm m-4">
                      Submit
                    </button> */}
                    <SubmitButton
                      form={form}
                      submittable={submittable}
                      setSubmittable={setSubmittable}
                      onFinish={onFinish}
                      billingAddressForm={billingAddressForm}
                      billingAddress={billingAddress}
                    ></SubmitButton>
                    ,
                  </Form>
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

import { useState } from "react";
import { useSignIn } from "../service/user.service.hook";
import { Form, Input, message } from "antd";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);

  const { mutateAsync: signInMutate } = useSignIn();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = () => {
    void form.validateFields().then(async () => {
      signInMutate({
        email: form.getFieldValue("Email"),
        phoneNumber: form.getFieldValue("Phone Number"),
        userName: form.getFieldValue("User Name"),
        password: form.getFieldValue("Password"),
        onSuccess: (data) => {
          messageApi.success("User Created Successfully");
        },
        onError: (data) => {
          setError(data.response.data.error);
        },
      });
    });
  };

  return (
    <>
      {contextHolder}
      <div className="wrapper">
        <h1 className="text-center">Register</h1>
        <hr />

        <Form
          style={{
            minWidth: "300px",
            textAlign: "center",
          }}
          onFinish={onFinish}
          form={form}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <Form.Item
            name="User Name"
            validateFirst
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter User Name" variant="underlined" />
          </Form.Item>
          <Form.Item
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
                    !["6", "7", "8", "9"].includes(value.toString().charAt(0))
                  ) {
                    return Promise.reject("Enter Valid Phone Number");
                  }
                  return Promise.resolve();
                },
              },
              { whitespace: true },
            ]}
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
              variant="underlined"
            />
          </Form.Item>
          <Form.Item
            name="Email"
            validateFirst
            rules={[
              { required: true },
              { type: "email" },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Email Address" variant="underlined" />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Enter Password" variant="underlined" />
          </Form.Item>
          <p>
            Already has an account?
            <NavLink
              to="/login"
              className="text-decoration-underline text-info"
            >
              Login
            </NavLink>
          </p>
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <button
            htmlTpe="submit"
            className="btn btn-outline-light btn-sbuttonm m-2"
          >
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
